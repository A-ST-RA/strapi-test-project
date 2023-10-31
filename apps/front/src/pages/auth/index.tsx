import { Flex } from 'antd';
import { Outlet } from 'react-router-dom';

export const AuthPage = () => (
    <Flex
        justify='center'
        align='center'
    >
        <Outlet></Outlet>
    </Flex>
);

export default AuthPage;
