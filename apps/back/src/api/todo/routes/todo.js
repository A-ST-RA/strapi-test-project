'use strict';

/**
 * todo router
 */

const customRouter = require('../../../utils/customRoutes');

const { createCoreRouter } = require('@strapi/strapi').factories;

const defaultRoutes = createCoreRouter('api::todo.todo');

const overrideRoutes = [];

const extraRoutes = [
    {
        method: "PATCH",
        path: "/todos/changeStatus/:id",
        handler: "api::todo.todo.changeStatus",
    },
]

module.exports = customRouter(defaultRoutes, overrideRoutes, extraRoutes)
