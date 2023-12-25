import { AxiosInstance } from "axios";

class Jobs {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  getJobs<T>() {
    return this.client.get<T>("/jobs");
  }

  getJobDetails<T>(id: string) {
    return this.client.get<T>(`/jobs/${id}`);
  }

  createJobPost<T, P>(body: P) {
    return this.client.post<T>("/jobs", body);
  }

  updateJobPost<T, P>(id: string, body: P) {
    return this.client.post<T>(`/jobs/${id}`, body);
  }

  deleteJobPost<T, P>(id: string, body: P) {
    return this.client.post<T>(`/jobs/${id}`, body);
  }

  getEmploymentTypes<T>() {
    return this.client.get<T>("/data/employment-types");
  }

  getPositionTypes<T>() {
    return this.client.get<T>("/data/position-types");
  }
}

export default Jobs;
