import * as z from 'zod';

const loginFormSchema = z.object({
  identifier: z
    .string()
    .email()
    .min(1, { message: "Поле обязательно для заполнения" }),
  password: z.string().min(1, { message: "Required" }),
  remember: z.boolean()
});

export default loginFormSchema;