import { AxiosInstance } from "axios";

class Auth {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  login<T>(body: { email: string; password: string }) {
    return this.client.post<T>("/auth/login", body);
  }

  register<T, P>(body: P) {
    return this.client.post<T>("/auth/register", body);
  }

  forgotPassword<T>(body: { email: string }) {
    return this.client.post<T>("/auth/forgot-password", body);
  }

  resetPasswordToken<T>(token: string) {
    return this.client.get<T>(`/auth/reset-password/${token}`);
  }

  resetPassword<T, P>(body: P) {
    return this.client.post<T>("/auth/reset-password", body);
  }
}

export default Auth;
