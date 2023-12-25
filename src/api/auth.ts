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
    return this.client.put<T>("/profile", body);
  }

  addEducation<T, P>(body: P) {
    return this.client.post<T>("/profile/education", body);
  }

  addWork<T, P>(body: P) {
    return this.client.post<T>("/profile/update/add_work", body);
  }

  deleteWork() {
    return this.client.post("/profile/work");
  }

  deleteEducation(body: { key: string }) {
    return this.client.post("/profile/education", body);
  }

  updateSkills<T, P>(body: P) {
    return this.client.patch<T>("/profile/skills", body);
  }

  updateSocials<T, P>(body: P) {
    return this.client.patch<T>("/profile/socials", body);
  }

  getTechCategories<T>() {
    return this.client.get<T>("/data/tech-categories");
  }
}

export default Auth;
