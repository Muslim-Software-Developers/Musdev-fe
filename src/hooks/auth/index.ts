import useGenericMutation from "../useGenericMutation";
import {
  ILoginResponse,
  ISignupResponse,
  SignupPayload,
  IForgotPasswordResponse,
  IResetPasswordResponse,
  ResetPasswordProps,
} from "./types";
import api from "@/api";

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
