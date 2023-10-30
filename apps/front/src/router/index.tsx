import AuthPage from '@/pages/auth';
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
]);

const AppRouter: FC = () => (
    <RouterProvider router={router} />
)

export default AppRouter;
