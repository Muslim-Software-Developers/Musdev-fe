import React, { useEffect } from "react";
import AuthLayout from "@/components/layout/authLayout";
import { useRouter } from "next/router";
import { useResetPassword } from "@/hooks/auth";
import { extractAxiosError } from "@/utils/helpers";
import { ResetPasswordFormFields, resetPasswordSchema } from "@/utils/schema";
import { notifyError, notifySuccess } from "@/utils/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Input from "@/components/forms/Input";
import Button from "@/components/button";
import Link from "next/link";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { token, email } = ctx.query;

  if (!token || !email) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

const ResetPassword = () => {
  const router = useRouter();

  const mutation = useResetPassword();

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormFields>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = (data: ResetPasswordFormFields) => {
    const { token, email } = router.query as { token: string; email: string };

    mutation.mutate(
      { ...data, email, token },
      {
        onSuccess: (data) => {
          notifySuccess("Your password has been changed successfullly.");
          reset();
          router.push("/auth/login");
        },
        onError: (error) => {
          const msg = extractAxiosError(error);
          notifyError(msg);
        },
      },
    );
  };

  return (
    <AuthLayout heading="Reset your password">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              className="mb-6"
              type="password"
              label="Password"
              placeholder="Enter password"
              errorMsg={errors.password?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="password_confirmation"
          control={control}
          render={({ field }) => (
            <Input
              type="password"
              label="Confirm Password"
              placeholder="Confirm password"
              errorMsg={errors.password_confirmation?.message}
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

export default ResetPassword;
