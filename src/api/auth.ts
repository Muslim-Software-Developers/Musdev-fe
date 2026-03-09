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

  userProfile<T>() {
    return this.client.get<T>("/profile/me");
  }

  updateProfile<T, P>(body: P) {
    return this.client.post<T>("/profile/update", body);
  }

  addEducation<T, P>(body: P) {
    return this.client.post<T>("/profile/update/add_edu", body);
  }

  addWork<T, P>(body: P) {
    return this.client.post<T>("/profile/update/add_work", body);
  }

  deleteWork() {
    return this.client.post("/profile/update/delete_work");
  }
}

export default Auth;
