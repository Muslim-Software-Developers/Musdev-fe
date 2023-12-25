import React, { Fragment } from "react";
import Input from "@/components/forms/Input";
import { Controller, useForm } from "react-hook-form";
import ErrorMessage from "@/components/forms/ErrorMessage";
import Button from "@/components/button";
import { useUpdateProfile } from "@/hooks/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileFormFields, profileSchema } from "@/utils/schema";
import { notifySuccess } from "@/utils/toast";
import { ProfileProps } from "@/hooks/auth/types";
import Textarea from "@/components/textarea";

interface IProps {
  data?: ProfileProps;
}

const ProfileEdit = ({ data }: IProps) => {
  const mutation = useUpdateProfile();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      // display_name: "",
      name: data?.user.name,
      phone: data?.user.phone,
      email: data?.user.email,
      primary_role: data?.user.role,
      years: parseInt(data?.years || "0"),
      bio: data?.bio,
    },
  });

  const onSubmit = (data: ProfileFormFields) => {
    const payload = {
      ...data,
    };
    mutation.mutate(payload, {
      onSuccess: (data) => {
        console.log(data);
        notifySuccess("Profile update successfully");
      },
    });
  };

  return (
    <div>
      <div className="space-y-8">
        <div className="flex items-center flex-wrap md:flex-nowrap gap-10">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                required
                label="Full Name"
                placeholder="Full Name"
                errorMsg={errors.name?.message}
                {...field}
                className="w-full"
              />
            )}
          />
        </div>

        <div className="flex items-center flex-wrap md:flex-nowrap gap-10">
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                label="Phone number"
                placeholder="+234"
                required
                type="number"
                errorMsg={errors.phone?.message}
                {...field}
                className="w-full"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                label="Email address"
                placeholder="Email address"
                errorMsg={errors.email?.message}
                {...field}
                className="w-full"
              />
            )}
          />
        </div>

        <div className="flex items-center flex-wrap md:flex-nowrap gap-10">
          <Controller
            name="years"
            control={control}
            render={({ field }) => (
              <Input
                type="number"
                label="Years of experience"
                placeholder="Years of experience"
                errorMsg={errors.years?.message}
                {...field}
                className="w-full"
              />
            )}
          />
          <Controller
            name="primary_role"
            control={control}
            render={({ field }) => (
              <Input
                type="string"
                label="Primary role"
                placeholder="Primary role"
                errorMsg={errors.primary_role?.message}
                {...field}
                className="w-full"
              />
            )}
          />
        </div>

        <Controller
          name="bio"
          control={control}
          render={({ field }) => (
            <Textarea
              label="Bio"
              placeholder="Bio"
              errorMsg={errors.bio?.message}
              {...field}
            />
          )}
        />
      </div>

      <div className="mt-6">
        <Button
          type="button"
          variant="primary"
          isLoading={mutation.isLoading}
          onClick={handleSubmit(onSubmit, (errors) => console.log(errors))}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ProfileEdit;
