import {z} from 'zod';

export const UserRegSchem = z.object(
    {
        username: z
            .string("Username missing")
            .min(3,"Username is too short")
            .max(16, "Username is too long")
            .refine((val) => !val.includes('@'), {
                message: "Username cannot contain '@' symbol",
            }),
        email: z
            .email("Not a email"),
        password: z
            .string("Password missing")
            .min(8, "Password is too short"),
        confirmPassword: z.string()
    }
).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type UserRegInput = z.infer< typeof UserRegSchem >;

export const UserLogSchem = z.object(
    {
        identifier: z
            .email("Invalid email format")
            .or(
                z.string()
                .min(3, "Username is too short")
                .max(16, "Username is too long")
            ),
        password: z.string().min(1, "Password is required"),
    }
);

export type UserLogInput = z.infer<typeof UserLogSchem>;
