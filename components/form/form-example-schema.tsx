import * as z from "zod";

export const formSchema = z.object({
  firstName: z
    .string({ required_error: "Please type your first name" })
    .min(2, {
      message: "First name must be at least 2 characters.",
    }),
});
