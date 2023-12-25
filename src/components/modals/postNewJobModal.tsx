import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../dialog";
import { notifySuccess } from "@/utils/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { CreateJobFields, createJobSchema } from "@/utils/schema";
import {
  useCreateJobPost,
  useGetEmploymentTypes,
  useGetPositionTypes,
} from "@/hooks/jobs";
import Input from "../forms/Input";
import Button from "../button";
import Select from "../select";
import Textarea from "../textarea";

interface CreateJobModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const CreateJobModal = ({ isOpen, closeModal }: CreateJobModalProps) => {
  const mutation = useCreateJobPost();
  const { data: employmentTypes } = useGetEmploymentTypes();
  const { data: positionTypes } = useGetPositionTypes();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateJobFields>({
    resolver: yupResolver(createJobSchema),
  });

  const onSubmit = (data: CreateJobFields) => {
    console.log(data);
    mutation.mutate(data as any, {
      onSuccess: (data) => {
        notifySuccess("Job created successfully.");
        closeModal();
      },
    });
  };

  const fields = [
    {
      key: "title",
      label: "Job Title",
      placeholder: "Job Title",
      type: "input", // options are input, textarea, select
      inputType: "text", // options are text, date, radio, checkbox e.t.c
    },
    {
      key: "section",
      label: "Job Category",
      placeholder: "Job Category",
      type: "input", // options are input, textarea, select
      inputType: "text", // options are text, date, radio, checkbox e.t.c
    },
    {
      key: "company_name",
      label: "Company Name",
      placeholder: "Company Name",
      type: "input", // options are input, textarea, select
      inputType: "text", // options are text, date, radio, checkbox e.t.c
    },
    {
      key: "employment_type",
      label: "Employment Type",
      placeholder: "Employment Type",
      type: "select", // options are input, textarea, select
      options: employmentTypes
        ? Object.keys(employmentTypes).map((key) => ({
            // @ts-ignore
            label: employmentTypes[key],
            value: key,
          }))
        : [],
      inputType: "text", // options are text, date, radio, checkbox e.t.c
    },
    {
      key: "position",
      label: "Job Position",
      placeholder: "Job Position",
      type: "select", // options are input, textarea, select
      options: positionTypes
        ? Object.keys(positionTypes).map((key) => ({
            // @ts-ignore
            label: positionTypes![key],
            value: key,
          }))
        : [],
      inputType: "text", // options are text, date, radio, checkbox e.t.c
    },
    {
      key: "description",
      label: "Job Description",
      placeholder: "Job Description",
      type: "input", // options are input, textarea, select
      inputType: "text", // options are text, date, radio, checkbox e.t.c
    },
    {
      key: "qualifications",
      label: "Qualifications",
      placeholder: "Qualifications",
      type: "textarea", // options are input, textarea, select
      inputType: "text", // options are text, date, radio, checkbox e.t.c
    },
    {
      key: "responsibilities",
      label: "Responsibilities",
      placeholder: "Responsibilities",
      type: "textarea", // options are input, textarea, select
      inputType: "text", // options are text, date, radio, checkbox e.t.c
    },
  ];

  return (
    <Dialog open={isOpen}>
      <DialogContent closeModal={closeModal}>
        <DialogHeader>
          <DialogTitle className="!text-2xl">
            Create New Job Posting
          </DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>

        <form className="flex flex-col gap-4 py-4">
          {fields.map((field) => {
            if (field.type === "textarea") {
              return (
                <div key={field.key}>
                  <Controller
                    name={field.key as any}
                    control={control}
                    render={({ field: controlField }) => (
                      <Textarea
                        label={field.label}
                        placeholder={field.placeholder}
                        errorMsg={
                          // @ts-ignore
                          errors[field.key] && errors[field.key].message
                        }
                        {...controlField}
                      />
                    )}
                  />
                </div>
              );
            }

            if (field.type === "select") {
              return (
                <div key={field.key}>
                  <Controller
                    name={field.key as any}
                    control={control}
                    render={({ field: controlField }) => (
                      <Select
                        label={field.label}
                        placeholder={field.placeholder}
                        options={field.options!}
                        errorMsg={
                          // @ts-ignore
                          errors[field.key] && errors[field.key].message
                        }
                        {...controlField}
                      />
                    )}
                  />
                </div>
              );
            }

            return (
              <div key={field.key}>
                <Controller
                  name={field.key as any}
                  control={control}
                  render={({ field: controlField }) => (
                    <Input
                      type={field.inputType}
                      label={field.label}
                      placeholder={field.placeholder}
                      // @ts-ignore
                      errorMsg={errors[field.key] && errors[field.key].message}
                      {...controlField}
                    />
                  )}
                />
              </div>
            );
          })}
        </form>

        <DialogFooter>
          <Button
            type="submit"
            isLoading={mutation.isLoading}
            onClick={handleSubmit(onSubmit)}
            variant="primary"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
