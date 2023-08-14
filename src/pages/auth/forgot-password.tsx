import React from "react";
import Input from "@/components/forms/Input";
import AuthLayout from "@/components/layout/authLayout";
import Button from "@/components/button";
import Link from "next/link";
import { useForgotPassword } from "@/hooks/auth";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordFormFields, forgotPasswordSchema } from "@/utils/schema";
import { notifyError, notifySuccess } from "@/utils/toast";
import { extractAxiosError } from "@/utils/helpers";

const ForgotPassword = () => {
  const mutation = useForgotPassword();

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormFields>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = ({ email }: ForgotPasswordFormFields) => {
    mutation.mutate(
      { email },
      {
        onSuccess: (data) => {
          console.log(data);
          notifySuccess("An password reset link has been sent to your email.");
          reset();
        },
        onError: (error) => {
          console.log(error);
          const msg = extractAxiosError(error);
          notifyError(msg);
        },
      },
    );
  };

  return (
    <AuthLayout
      heading="Forgot your password"
      subHeading="Enter your email to reset your password"
    >
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="email"
              label="Email address"
              placeholder="email address"
              errorMsg={errors.email?.message}
              {...field}
            />
          )}
        />

        <div className="mt-6">
          <Button
            className="w-full bg-primary rounded-md py-[10px] font-medium text-[18px] leading-[28px] text-white"
            type="submit"
            isLoading={mutation.isLoading}
          >
            Reset
          </Button>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/auth/login"
            className="text-sm leading-5 font-medium text-[#006A4E]"
          >
            Back to login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
