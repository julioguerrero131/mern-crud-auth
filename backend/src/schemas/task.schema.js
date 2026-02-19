import z from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(1, "Title must be at least 1 character"),
  description: z
    .string({ required_error: "Description is required" })
    .optional(),
  date: z
    .iso.date({ required_error: "Date is required" })
    .optional(),
});

export const updateTaskSchema = z.object({

});