import { z } from "zod";

const addressSchema = z.object({
  street: z.string().nonempty("Street is required"),
  city: z.string().nonempty("City is required"),
  state: z.string().nonempty("State is required"),
  postalCode: z
    .string()
    .nonempty("Postal code is required")
    .regex(/^\d{5}(-\d{4})?$/, "Invalid postal code format"),
  country: z.string().nonempty("Country is required"),
});

export const referralSchema = z.object({
  givenname: z.string().nonempty("Given name is required"),
  surname: z.string().nonempty("Surname is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .nonempty("Phone number is required")
    .regex(
      /^(\+63\s?\d{3}\s?\d{3}\s?\d{4}|0?\(\d{4}\)\s?\d{3}\s?\d{4}|\+63\d{10}|0\d{10})$/,
      "Enter a valid Philippine phone number (e.g., +63 961 568 9626 or (0961) 568 9626)"
    ),
  address: addressSchema,
  notes: z.string().optional(),
});

export type ReferralFormValues = z.infer<typeof referralSchema>;
