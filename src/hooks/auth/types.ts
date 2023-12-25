interface IResponse {}

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

interface WorkProps {
  company: string;
  description: string;
  is_current: boolean;
  start: string;
  end?: string;
  title: string;
}

interface ProfileProps {
  id: number;
  bio: string;
  tech_niche: string;
  years: string;
  work: WorkProps[];
  profile: {
    bio: string;
    education: string;
    skills: string;
    socials: string;
    tech_niche: string;
    work: string;
    years_of_experience: "4";
  };
  education: any;
  socials: {
    website: string;
    github: string;
    twitter: string;
    linkedin: string;
  };
  skills: string;
  user_id: string;
  user: {
    name: string;
    slug: string;
    email: string;
    phone: string;
    role: string;
  };
}

interface ProfilePropsResponse extends IResponse {
  data: ProfileProps;
}

interface GetTechCategoriesResponse extends IResponse {
  data: {
    "web-development": "Web Development";
    "ui-ux": "UI UX";
    "data-science": "Data Science";
    "frontend-development": "Frontend Development";
    "backend-development": "Backend Development";
    "computer-networking": "Computer Networking";
    others: "Others";
  };
}

export type {
  ILoginResponse,
  IResetPasswordResponse,
  IForgotPasswordResponse,
  ISignupResponse,
  SignupPayload,
  ResetPasswordProps,
  ProfileProps,
  WorkProps,
  ProfilePropsResponse,
  GetTechCategoriesResponse,
};
