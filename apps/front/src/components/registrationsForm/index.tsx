import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Form, Input } from "antd";
import registerFormSchema from './registerFormSchema';

import { FormItem } from "react-hook-form-antd";
import { useAppActions } from '@/globalHooks/useAppActions';
import { useTypedSelector } from '@/globalHooks/useTypedSelector';
import { Link, Navigate, useSearchParams } from 'react-router-dom';

interface IRegisterFormData {
    email: string;
    password: string;
    fio: string;
    username: string;
}

const RegisterForm = () => {
    const [ searchParams ] = useSearchParams();
    const { status } = useTypedSelector((selector) => selector.auth);

    const { control, handleSubmit } = useForm<IRegisterFormData>(
      {
        resolver: zodResolver(registerFormSchema),
      }
    );
    
    const { register } = useAppActions();
    
    const onSubmit = (data: IRegisterFormData) => {
      register(data);
    }

    if (status === 'succeeded') {
      const redirectPath = searchParams.get('rollbackUrl') || '/home';
      return <Navigate to={redirectPath}></Navigate>
    }

    return <Form
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      style={{ minWidth: 600 }}
    >
        <FormItem label="почта" control={control} name="email">
            <Input placeholder='Введите вашу почту' />
        </FormItem>
        <FormItem label="ФИО" control={control} name="fio">
            <Input placeholder='Введите ваше фио' />
        </FormItem>
        <FormItem label="имя пользователя" control={control} name="username">
            <Input placeholder='Введите ваш никнейм' />
        </FormItem>
        <FormItem label="пароль" control={control} name="password">
            <Input.Password placeholder='Введите ваш пароль' />
        </FormItem>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
        <Link to="/auth/login">
          <Button style={{ padding: 0 }} type="link" htmlType="button">
            у меня уже есть аккаунт
          </Button>
        </Link>
    </Form>
};

export default RegisterForm;
