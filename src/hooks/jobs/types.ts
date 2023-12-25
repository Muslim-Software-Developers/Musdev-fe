interface JobProps {
  title: string;
  slug: string;
  image: string;
  section: string;
  company_name: string;
  employment_type: string;
  position: string;
  description: string;
  qualifications: string[];
  responsibilities: string[];
  listed_on: string;
  expires_at: string;
}

interface GetJobResponse {
  data: JobProps[];
}

interface GetPositionTypesResponse {
  data: {
    intern: "Intern";
    junior: "Junior";
    intermediate: "Intermediate";
    senior: "Senior";
    others: "Others";
  };
}

interface GetEmploymentTypesResponse {
  data: {
    remote: "Remote";
    hybrid: "Hybrid";
    contract: "Contract";
    "full-time": "Full Time";
    "part-time": "Part Time";
    internship: "Internship";
    others: "Others";
  };
}

interface CreateJobPostResponse {
  data: string;
  success: boolean;
  message: string;
}

interface CreateJobPostPayload
  extends Omit<JobProps, "expires_at" | "qualifications" | "responsibilities"> {
  qualifications: string;
  responsibilities: string;
}

export type {
  JobProps,
  GetJobResponse,
  CreateJobPostPayload,
  CreateJobPostResponse,
  GetPositionTypesResponse,
  GetEmploymentTypesResponse,
};
