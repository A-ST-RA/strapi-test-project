import AuthProtectedRoute from '@/components/AuthProtectedRoute';
import AuthPage from '@/pages/auth';
import HomePage from '@/pages/home';
import IndexPage from '@/pages/index';
import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    },
    {
        path: "/auth",
        element: <AuthPage />,
    },
    {
        path: "/home",
        element: <AuthProtectedRoute><HomePage /></AuthProtectedRoute>,
    },
]);

const AppRouter: FC = () => (
    <RouterProvider router={router} />
)

export default AppRouter;
