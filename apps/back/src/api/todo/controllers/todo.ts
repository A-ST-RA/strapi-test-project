/**
 * todo controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::todo.todo', ({ strapi }) => ({
    create: async (ctx) => {
        const { id } = ctx?.state?.user;
        const { data } = ctx?.request?.body;

        data.user = id;

        const savedData = await strapi.services['api::todo.todo'].create(data);
        // const sanitizedData = await this.sanitizeOutput(data, ctx);
    }
}));
