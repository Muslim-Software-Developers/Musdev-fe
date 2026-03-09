import React from "react";

import AuthLayout from "@/components/layout/authLayout";

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
   <div>...</div>
  );
};

export default ForgotPassword;
