import { ICustomRoute } from '@/types/customRoute';
import makeCustomRouter from '@/utils/makeCustomRouter';
import { factories } from '@strapi/strapi';

const defaultRoutes = factories.createCoreRouter('api::todo.todo');

const customRoutes: ICustomRoute[] = [
    {
        method: 'PATCH',
        handler: 'api::todo.todo.toggleTodoStatus',
        path: '/todos/toggle-todo-status/:id',
    }
];

export default makeCustomRouter(defaultRoutes, customRoutes);