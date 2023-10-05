import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/button";
import Input from "@/components/forms/Input";
import { EducationFields, educationSchema } from "@/utils/schema";
import { useAddEducation } from "@/hooks/auth";
import { notifySuccess } from "@/utils/toast";

interface Props {
  closeEdit: () => void;
}

const EducationEdit = ({ closeEdit }: Props) => {
  const mutation = useAddEducation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EducationFields>({
    resolver: yupResolver(educationSchema),
    defaultValues: {},
  });

  const onSubmit = (data: EducationFields) => {
    const payload = {
      education: {
        0: { ...data, year_grad: parseInt(data.year_grad) },
      },
    };

    console.log(payload);

    mutation.mutate(payload, {
      onSuccess: (data) => {
        console.log(data);
        closeEdit();
        notifySuccess("Profile update successfully");
      },
    });
  };

  return (
    <div className="space-y-8 mt-8">
      <div className="flex items-center gap-x-10">
        <Controller
          name="college"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label="College Name"
              placeholder="College Name"
              errorMsg={errors.college?.message}
              {...field}
              className="w-full"
              required
            />
          )}
        />
        <Controller
          name="course"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label="Course of Study"
              placeholder="Course of Study"
              errorMsg={errors.course?.message}
              {...field}
              className="w-full"
            />
          )}
        />
      </div>
      <div className="w-1/2">
        <Controller
          name="year_grad"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label="Graduation Year"
              placeholder="Graduation"
              errorMsg={errors.year_grad?.message}
              {...field}
              className="w-full"
              required
            />
          )}
        />
      </div>

      <div>
        <Button
          variant="primary"
          onClick={handleSubmit(onSubmit)}
          type="button"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default EducationEdit;
