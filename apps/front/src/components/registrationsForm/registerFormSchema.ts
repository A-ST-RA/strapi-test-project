import * as z from 'zod';

const registerFormSchema = z.object({
  email: z
    .string({ required_error: 'Введите данные' })
    .email()
    .min(1, { message: "Поле обязательно для заполнения" }),
  password: z.string({ required_error: 'Введите данные' }).min(1, { message: "Required" }),
  fio: z.string({ required_error: 'Введите данные' }).min(1, { message: "Required" }),
  username: z.string({ required_error: 'Введите данные' }).min(1, { message: "Required" }),
});

export default registerFormSchema;