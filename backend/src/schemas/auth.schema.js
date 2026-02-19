import z from "zod";

export const registerSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(2, "Username must be at least 2 characters"),
  email: z
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  email: z
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});
