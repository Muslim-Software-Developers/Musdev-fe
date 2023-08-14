import { InferType, number, object, ref, string } from "yup";

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
