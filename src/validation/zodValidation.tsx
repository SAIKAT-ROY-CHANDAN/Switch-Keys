import { z } from "zod";

export const userInfoSchema = z.object({
    firstname: z.string().max(15, { message: "First name must be at least with in 15 characters." }),
    lastname: z.string().max(15, { message: "Last name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().max(12, { message: "Phone number must be at least 12 digits." }),
    address: z.string().min(2, { message: "Address must be at least 5 characters." }),
  });
  