import { processEntityToReturn } from '@/utils/processEntityToReturn';
import { factories } from '@strapi/strapi'

import { sanitize } from '@strapi/utils';

export default factories.createCoreController('api::todo.todo', ({ strapi }) => ({
    create: async (ctx) => {
        try {
            const { id: userId } = ctx?.state?.user;
            const { data } = ctx?.request?.body;
    
            const createdData = {
                data: {
                    ...data,
                    user: {
                        id: userId,
                    }
                }
            };
    
            const savedData = await strapi.services['api::todo.todo'].create(createdData);
            const sanitizedEntity = await sanitize.contentAPI.output(savedData, strapi.getModel('api::todo.todo'));
    
            
            console.log(processEntityToReturn(sanitizedEntity as { id: number }));
            return processEntityToReturn(sanitizedEntity as { id: number });
        } catch (e) {
            console.error(e);
        }
    },

    toggleTodoStatus: async (ctx) => {
        try {
            const id = +ctx?.request?.params.id;
            
            const foundedData = await strapi.services['api::todo.todo'].findOne(id);
            foundedData.status = !foundedData.status; 
            
            const sanitizedEntity = await sanitize.contentAPI.output(foundedData, strapi.getModel('api::todo.todo'));
            
            console.log(processEntityToReturn(sanitizedEntity as { id: number }));
            return processEntityToReturn(sanitizedEntity as { id: number });
        } catch (e) {
            console.error(e);
        }        
    }
}));
