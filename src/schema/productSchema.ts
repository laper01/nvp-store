import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().trim().min(1, { message: "Title is required" }), // Not null, string, trimmed, min length 1
  price: z.number().nonnegative(), // Not null and non-negative number
  description: z.string().trim().min(1, { message: "Description is required" }), // Not null, string, trimmed, min length 1
  categoryId: z.number().nonnegative().int(), // Not null, non-negative integer
  images: z.array(z.string().url()), // Not null, array of valid URLs
});
