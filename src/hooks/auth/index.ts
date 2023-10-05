import { useQuery } from "react-query";
import useGenericMutation from "../useGenericMutation";
import useGenericQuery from "../useGenericQuery";
import {
  ILoginResponse,
  ISignupResponse,
  SignupPayload,
  IForgotPasswordResponse,
  IResetPasswordResponse,
  ResetPasswordProps,
  ProfileProps,
} from "./types";
import api from "@/api";

export const useGetProfile = () => {
  const { data, ...rest } = useQuery("profile", () =>
    api.auth.userProfile<ProfileProps>(),
  );
  return { ...rest, data: data?.data };
};

export const useUpdateProfile = () => {
  return useGenericMutation<any, any>(
    "profile",
    (data) => api.auth.updateProfile<any, {}>(data),
    undefined,
  );
};

export const useAddEducation = () => {
  return useGenericMutation<any, any>(
    "add-education",
    (data) => api.auth.addEducation<any, {}>(data),
    undefined,
  );
};

export const useAddWork = () => {
  return useGenericMutation<any, any>(
    "add-work",
    (data) => api.auth.addWork<any, {}>(data),
    undefined,
  );
};

export const useDeleteWork = () => {
  return useGenericMutation(
    "delete-work",
    (data) => api.auth.deleteWork(),
    undefined,
  );
};

export const useLogin = () => {
  return useGenericMutation<
    ILoginResponse,
    { email: string; password: string }
  >("login", (data) => api.auth.login<ILoginResponse>(data), undefined);
};

export const useRegister = () => {
  return useGenericMutation<ISignupResponse, SignupPayload>(
    "register",
    (data) => api.auth.register<ISignupResponse, SignupPayload>(data),
    undefined,
  );
};

export const useForgotPassword = () => {
  return useGenericMutation<IForgotPasswordResponse, { email: string }>(
    "forgot-password",
    (data) => api.auth.forgotPassword<IForgotPasswordResponse>(data),
    undefined,
  );
};

export const useResetPassword = () => {
  return useGenericMutation<IResetPasswordResponse, ResetPasswordProps>(
    "reset-password",
    (data) =>
      api.auth.resetPassword<IResetPasswordResponse, ResetPasswordProps>(data),
    undefined,
  );
};

export const useConfirmPasswordToken = () => {
  return useGenericMutation<IResetPasswordResponse, { token: string }>(
    "confirm-password-token",
    (data) => api.auth.resetPasswordToken<IResetPasswordResponse>(data.token),
    undefined,
  );
};
