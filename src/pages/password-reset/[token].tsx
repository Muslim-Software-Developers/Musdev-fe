import React, { useEffect } from "react";
import AuthLayout from "@/components/layout/authLayout";
import { useRouter } from "next/router";
import { useResetPassword } from "@/hooks/auth";
import { extractAxiosError } from "@/utils/helpers";
import { ResetPasswordFormFields, resetPasswordSchema } from "@/utils/schema";
import { notifyError, notifySuccess } from "@/utils/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

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
 <div></div>
  );
};

export default ResetPassword;
