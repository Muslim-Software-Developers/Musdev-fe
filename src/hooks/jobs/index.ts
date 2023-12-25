import api from "@/api";
import { useQuery } from "react-query";
import useGenericMutation from "../useGenericMutation";
import {
  GetJobResponse,
  CreateJobPostPayload,
  CreateJobPostResponse,
  GetPositionTypesResponse,
  GetEmploymentTypesResponse,
} from "./types";

export const useGetJobs = () => {
  const { data, ...rest } = useQuery("jobs", () =>
    api.jobs.getJobs<GetJobResponse>(),
  );
  return { ...rest, data: data?.data?.data };
};

export const useGetJobDetails = (id: string) => {
  const { data, ...rest } = useQuery(
    "job-details",
    () => api.jobs.getJobDetails<GetJobResponse>(id),
    {
      enabled: !!id,
    },
  );
  return { ...rest, data: data?.data?.data };
};

export const useGetEmploymentTypes = () => {
  const { data, ...rest } = useQuery("employment-types", () =>
    api.jobs.getEmploymentTypes<GetEmploymentTypesResponse>(),
  );
  return { ...rest, data: data?.data?.data };
};

export const useGetPositionTypes = () => {
  const { data, ...rest } = useQuery("position-types", () =>
    api.jobs.getPositionTypes<GetPositionTypesResponse>(),
  );
  return { ...rest, data: data?.data?.data };
};

export const useCreateJobPost = () => {
  const { data, ...rest } = useGenericMutation<
    CreateJobPostResponse,
    CreateJobPostPayload
  >("job", (data) =>
    api.jobs.createJobPost<CreateJobPostResponse, CreateJobPostPayload>(data),
  );
  return { ...rest, data: data?.data.data };
};
