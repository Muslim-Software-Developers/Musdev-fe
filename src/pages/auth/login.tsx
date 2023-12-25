import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import Input from "@/components/forms/Input";
import AuthLayout from "@/components/layout/authLayout";
import Button from "@/components/button";
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
      const path = session.user?.user?.is_admin ? "/admin" : "/app";
      router.push((router.query.callbackUrl as string) || path);
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
    <AuthLayout heading="Login to your account">
      <form
        className="w-full flex flex-col gap-y-5"
        onSubmit={handleSubmit(onSubmit, (errors) =>
          console.log("Errors", errors),
        )}
      >
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

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              type="password"
              label="Password"
              placeholder="password"
              errorMsg={errors.password?.message}
              {...field}
            />
          )}
        />

        <div className="flex items-center gap-x-2">
          <input type="checkbox" id="remember me" />{" "}
          <label
            htmlFor="remember me"
            className="text-[#111827] text-sm leading-5"
          >
            Remember me
          </label>
        </div>
        <div className="mt-4">
          <Button
            isLoading={isLoading}
            type="submit"
            className="w-full bg-primary rounded-md py-[10px] font-medium text-[18px] leading-[28px] text-white"
          >
            Save
          </Button>
        </div>
        <div className="flex items-center justify-center gap-x-1 text-center mt-4">
          <h3 className="text-[#808080] text-sm leading-5">
            Forgotten Your Password?
          </h3>
          <Link
            href="/auth/forgot-password"
            className="text-sm leading-5 font-medium text-[#006A4E]"
          >
            {" "}
            Reset Now
          </Link>
        </div>

        <div className="flex items-center justify-center gap-x-1 text-center">
          <p className="text-[#808080] text-sm leading-5">
            Don&apos;t have an account?
            <Link
              href="/auth/signup"
              className="text-sm leading-5 font-medium text-[#006A4E]"
            >
              {" "}
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
