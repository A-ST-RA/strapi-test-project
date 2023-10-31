import * as z from 'zod';

const loginFormSchema = z.object({
  identifier: z
    .string({ required_error: 'Введите данные' })
    .email()
    .min(1, { message: "Поле обязательно для заполнения" }),
  password: z.string({ required_error: 'Введите данные' }).min(1, { message: "Required" }),
  remember: z.boolean()
});

export default loginFormSchema;