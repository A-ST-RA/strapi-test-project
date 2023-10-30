import LoginForm from '@/components/loginForm';
import { Flex } from 'antd';

export const AuthPage = () => (
    <Flex
        justify='center'
        align='center'    
    >
        <LoginForm></LoginForm>
    </Flex>
);

export default AuthPage;
