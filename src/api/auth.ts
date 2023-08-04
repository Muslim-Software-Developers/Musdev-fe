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
}

export default Auth;
