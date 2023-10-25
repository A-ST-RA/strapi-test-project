import { factories } from '@strapi/strapi'

import { sanitize } from '@strapi/utils';

export default factories.createCoreController('api::todo.todo', ({ strapi }) => ({
    create: async (ctx) => {
        const { id } = ctx?.state?.user;
        const { data } = ctx?.request?.body;

        const createdData = {
            data: {
                ...data,
                user: {
                    id: id,
                }
            }
        };

        const savedData = await strapi.services['api::todo.todo'].create(createdData);
        const sanitizedEntity = await sanitize.contentAPI.output(savedData, strapi.getModel('api::todo.todo'));

        return processEntityToReturn(sanitizedEntity);   
   }
}));
