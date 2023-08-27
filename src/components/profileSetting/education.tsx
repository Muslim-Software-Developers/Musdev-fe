import React from "react";
import Input from "../forms/Input";
import { Controller, useForm } from "react-hook-form";
import { ProfileFormFields } from "@/utils/schema";
import Button from "../button";

interface IEdit {
  edit: string;
  toggleEdit?: () => void;
  closeEdit?: () => void;
}

export const Education = (props: IEdit) => {
  return (
    <div className="w-full flex justify-between items-start">
      <div className="text-neutral01 font-bold text-sm tracking-[0.112px] space-y-[3px]">
        <h2 className="capitalize">tomorrow university</h2>
        <p className="text-[#808080] font-normal">
          Artificial Intelligence and sustainable technologies, Bachelor&apos;s
        </p>
        <p className="text-[#808080] font-normal">2025</p>
      </div>
      <div
        className="flex items-center gap-x-2 cursor-pointer"
        onClick={props.toggleEdit}
      >
        <span className="font-medium text-[#0D706E] text-[11px] tracking-[0.367px]">
          Edit
        </span>
        <span>
          <img src="/icons/arrow-circle.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export const EducationEdit = (props: IEdit) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormFields>({
    // resolver: yupResolver(profileSchema),
    defaultValues: {
      college_name: "",
      course_of_study: "",
      graduation: "",
    },
  });

  return (
    <div className="space-y-8 mt-8">
      <div className="flex items-center gap-x-10">
        <Controller
          name="college_name"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label="College Name"
              placeholder="College Name"
              errorMsg={errors.college_name?.message}
              {...field}
              className="w-full"
              required
            />
          )}
        />
        <Controller
          name="course_of_study"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label="Course of Study"
              placeholder="Course of Study"
              errorMsg={errors.course_of_study?.message}
              {...field}
              className="w-full"
            />
          )}
        />
      </div>
      <div className="w-1/2">
        <Controller
          name="graduation"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label="Graduation"
              placeholder="Graduation"
              errorMsg={errors.graduation?.message}
              {...field}
              className="w-full"
              required
            />
          )}
        />
      </div>

      <div>
        <Button variant="primary" onClick={props.closeEdit} type="button">
          Save Changes
        </Button>
      </div>
    </div>
  );
};
