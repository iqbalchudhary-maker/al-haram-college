import { z } from "zod";

export const studentSchema = z.object({
  rollNumber: z.string().min(1, "Roll Number is required"),
  fullName: z.string().min(3, "Full Name is too short"),
  fatherName: z.string().min(3, "Father Name is required"),
  className: z.string(),
  section: z.string(),
  session: z.string(),
  mobile: z.string().min(11, "Enter valid Pakistani mobile number"),
  parentMobile: z.string().min(11),
  address: z.string(),
});