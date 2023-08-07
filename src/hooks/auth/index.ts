import useGenericMutation from "../useGenericMutation";
import { ILoginResponse, ISignupResponse, SignupPayload } from "./types";
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
