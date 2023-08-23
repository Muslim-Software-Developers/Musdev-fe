import { InferType, number, object, ref, string, array } from "yup";

const emailSchema = () =>
  string().email("Invalid Email").required("Email is required");

export const loginSchema = object({
  email: emailSchema(),
  password: string()
    .min(8, "Password should be at least 8 characters")
    .required("Password is required"),
}).required();

export type LoginFormFields = InferType<typeof loginSchema>;

export const forgotPasswordSchema = object({
  email: emailSchema(),
}).required();

export type ForgotPasswordFormFields = InferType<typeof forgotPasswordSchema>;

export const signupSchema = object({
  name: string().required(),
  phone: string().required().length(11, "Phone number has to be 11 digits"),
  email: emailSchema(),
  tech_niche: string(),
  linkedIn: string(),
  password: string()
    .min(8, "Password should be at least 8 characters")
    .required("Password is required"),
  password_confirmation: string()
    .required("Please re-enter your password")
    .oneOf([ref("password")], "Passwords must match"),
}).required();

export type SignupFormFields = InferType<typeof signupSchema>;

export const resetPasswordSchema = object({
  password: string()
    .min(8, "Password should be at least 8 characters")
    .required("Password is required"),
  password_confirmation: string()
    .required("Please re-enter your password")
    .oneOf([ref("password")], "Passwords must match"),
}).required();

export type ResetPasswordFormFields = InferType<typeof resetPasswordSchema>;

export const profileSchema = object({
  display_name: string().label("Display name"),
  full_name: string().required("Full name is required"),
  phone: string().required().length(11, "Phone number has to be 11 digits"),
  email: emailSchema(),
  primary_role: string().label("Primary role"),
  years_of_experience: number().label("Years of experience"),
  bio: string().required("Bio is required"),
  portfolio: string(),
  linkenIn: string(),
  github: string(),
  twitter: string(),
  company: string().required("This information is required"),
  title: string().required("Title is required"),
  start_date: string().required("Start date is required"),
  end_date: string().required("End date is required"),
  description: string().required("Description is required"),
  college_name: string().required("College name is required"),
  course_of_study: string(),
  graduation: string().required("Graduation is required"),
  skills: string(),
});

export type ProfileFormFields = InferType<typeof profileSchema>;
