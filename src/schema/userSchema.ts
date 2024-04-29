import { z } from 'zod';

export const userSchema = z.object({
  id: z.number().int().positive(), // Not null, positive integer
  email: z.string().email(), // Not null, valid email
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }), // Not null, min length 8
  name: z.string().trim().min(1, { message: "Name is required" }), // Not null, string, trimmed, min length 1
  role: z.string().min(1, { message: "Role is required" }), // Not null, string, min length 1
});