import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Checkbox, Form, Input } from "antd";
import loginFormSchema from './loginFormSchema';

import { FormItem } from "react-hook-form-antd";
import { useAppActions } from '@/globalHooks/useAppActions';
import { useTypedSelector } from '@/globalHooks/useTypedSelector';
import { Navigate, useSearchParams } from 'react-router-dom';

interface ILoginFormData {
    identifier: string;
    password: string;
    remember: boolean;
}

const LoginForm = () => {
    const [ searchParams ] = useSearchParams();
    const { status } = useTypedSelector((selector) => selector.auth);

    const { control, handleSubmit } = useForm<ILoginFormData>(
      {resolver: zodResolver(loginFormSchema)}
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
      onFinish={handleSubmit(onSubmit)}
      labelCol={{ span: 3 }}
      style={{ minWidth: 600 }}
    >
        <FormItem label="логин" control={control} name="identifier">
            <Input placeholder='Введите ваш логин' />
        </FormItem>
        <FormItem label="пароль" control={control} name="password">
            <Input.Password placeholder='Введите ваш пароль' />
        </FormItem>
        <FormItem wrapperCol={{ offset: 3 }} control={control} name="remember" valuePropName="checked">
          <Checkbox>Запомнить меня</Checkbox>
        </FormItem>
        <Form.Item wrapperCol={{ offset: 3 }} >
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
    </Form>
};

export default LoginForm;
