import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

import AuthLayout from "@/components/layout/authLayout";

import { Controller, useForm } from "react-hook-form";
import { LoginFormFields, loginSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { notifyError } from "@/utils/toast";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { data: session } = useSession();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session) {
      router.push((router.query.callbackUrl as string) || "/app");
    }
  }, [session, router]);

  const onSubmit = async ({ email, password }: LoginFormFields) => {
    setIsLoading(true);
    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
      // callbackUrl: (router.query.callbackUrl as string) || "/login",
    });
    setIsLoading(false);

    if (result?.error && result?.error !== "SessionRequired") {
      return notifyError(result.error);
    }
  };

  return (
<div>...</div>
  );
};

export default Login;
