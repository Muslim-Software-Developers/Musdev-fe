import React from "react";
import Input from "@/components/forms/Input";
import AuthLayout from "@/components/layout/authLayout";
import Button from "@/components/button";
import { Controller, useForm } from "react-hook-form";
import { LoginFormFields, loginSchema } from "@/utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "@/hooks/auth";
import { extractAxiosError } from "@/utils/helpers";

const Login = () => {
  const mutation = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormFields) => {
    try {
      await mutation.mutateAsync(data, {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
          const msg = extractAxiosError(error);
        },
      });
    } catch (error) {
      console.log(error);
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
            type="submit"
            className="w-full bg-[#0D703C] rounded-md py-[10px] font-medium text-[18px] leading-[28px] text-white"
            isLoading={mutation.isLoading}
          >
            Save
          </Button>
        </div>
        <div className="flex items-center justify-center gap-x-1 text-center mt-5">
          <h3 className="text-[#808080] text-sm leading-5">
            Forgotten Your Password?
          </h3>
          <Button className="text-sm leading-5 font-medium text-[#006A4E]">
            Reset Now
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
