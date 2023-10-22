// @ts-nocheck
'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitize } = require('@strapi/utils');

module.exports = createCoreController('api::todo.todo', ({ strapi }) => ({
    async create(ctx) {
        // @ts-ignore
        try {
            const todo = ctx.request?.body;
            todo.data.user = ctx.state.user;

            const entity = await strapi.service('api::todo.todo').create(todo);
            const sanitizedData = await sanitize.contentAPI.output(entity, strapi.getModel('api::todo.todo'));

            return { data: sanitizedData };
        } catch (err) {
            console.log(err);
        }
    },

    async changeStatus(ctx) {
        const id = ctx.params.id;

        console.log(ctx.request.body.data.status)
        const findEntity = await strapi.service('api::todo.todo').update(id, {data: { status: ctx.request.body.data.status }});

        const sanitizedData = await sanitize.contentAPI.output(findEntity, strapi.getModel('api::todo.todo'));
        
        return sanitizedData;
    }
}));
