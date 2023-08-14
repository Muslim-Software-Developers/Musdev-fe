interface ILoginResponse {
  data: {
    token: string;
  };
  metadata: string[];
}

interface IForgotPasswordResponse {}

interface IResetPasswordResponse {}

interface ResetPasswordProps {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}
interface ISignupResponse {
  data: {
    user: {
      name: string;
      slug: string;
      email: string;
      phone: string;
      linkedin: string;
      tech_niche: string;
      updated_at: string;
      created_at: string;
    };
    token: string;
  };
  metadata: string[];
}

interface SignupPayload {
  name: string;
  phone: string;
  email: string;
  linkedIn?: string;
  tech_niche?: string;
  password: string;
  password_confirmation: string;
}

export type {
  ILoginResponse,
  IResetPasswordResponse,
  IForgotPasswordResponse,
  ISignupResponse,
  SignupPayload,
  ResetPasswordProps,
};
