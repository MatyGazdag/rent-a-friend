import z from "zod";

export const userBodyReqSchem = z.object({
    username: z
    .string()
    .min(3, "Username is too short")
    .max(16, "Username is too long")
    .refine((val) => !val.includes('@'), {
      message: "Username cannot contain '@' symbol",
    }),
  email: z
    .email("Not a valid email"),
  password: z
    .string()
    .min(8, "Password is too short"),
});

export type userBodyReqSchemInput = z.infer<typeof userBodyReqSchem>;