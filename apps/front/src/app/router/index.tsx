import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { IndexPage } from '@/pages/index';

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    },
]);

const AppRouter: FC = () => (
    <RouterProvider router={router} />
)

export default AppRouter;
