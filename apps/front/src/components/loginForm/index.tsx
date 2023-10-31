import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Form, Input } from "antd";
import loginFormSchema from './loginFormSchema';

import { FormItem } from "react-hook-form-antd";
import { useAppActions } from '@/globalHooks/useAppActions';
import { useTypedSelector } from '@/globalHooks/useTypedSelector';
import { Link, Navigate, useSearchParams } from 'react-router-dom';

interface ILoginFormData {
    identifier: string;
    password: string;
}

const LoginForm = () => {
    const [ searchParams ] = useSearchParams();
    const { status } = useTypedSelector((selector) => selector.auth);

    const { control, handleSubmit } = useForm<ILoginFormData>(
      {
        resolver: zodResolver(loginFormSchema),
      }
    );
    
    const { login } = useAppActions();
    
    const onSubmit = (data: ILoginFormData) => {
      login(data);
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
        <FormItem label="логин" control={control} name="identifier">
            <Input placeholder='Введите ваш логин' />
        </FormItem>
        <FormItem label="пароль" control={control} name="password">
            <Input.Password placeholder='Введите ваш пароль' />
        </FormItem>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
        <Link to="/auth/reg">
          <Button style={{ padding: 0 }} type="link" htmlType="button">
            У меня еще нет аккаунта
          </Button>
        </Link>
    </Form>
};

export default LoginForm;
