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
  // display_name: string()
  //   .label("Display name")
  //   .required("Display name is required"),
  name: string().required("Full name is required"),
  phone: string().required().length(11, "Phone number has to be 11 digits"),
  email: emailSchema(),
  primary_role: string().label("Primary role"),
  years: number().label("Years of experience"),
  bio: string().required("Bio is required"),

  portfolio: string(),
  linkenIn: string(),
  github: string(),
  twitter: string(),

  // skills: string(),
});

export type ProfileFormFields = InferType<typeof profileSchema>;

export const workExperienceSchema = object({
  company: string().required("This information is required"),
  title: string().required("Title is required"),
  start: string().required("Start date is required"),
  end: string().required("End date is required"),
  description: string().required("Description is required"),
});

export type WorkExperienceFields = InferType<typeof workExperienceSchema>;

export const educationSchema = object({
  college: string().required("College name is required"),
  course: string().required(),
  year_grad: string().required("Graduation is required"),
});

export type EducationFields = InferType<typeof educationSchema>;

export const skillSchema = object({
  skills: string(),
});

export type SkillFields = InferType<typeof skillSchema>;
