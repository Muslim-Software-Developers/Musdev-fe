import AuthLayout from "@/components/layout/authLayout";
import React from "react";
import Link from "next/link";
import Input from "@/components/forms/Input";
import FormSelect from "@/components/forms/FormSelect";
import Button from "@/components/button";
import { useRegister } from "@/hooks/auth";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupFormFields, signupSchema } from "@/utils/schema";
import { extractAxiosError } from "@/utils/helpers";
import { notifyError, notifySuccess } from "@/utils/toast";
import { useRouter } from "next/router";

interface IStepOneProp {
  handleStep: (step: number) => void;
  control: any;
  errors: FieldErrors<SignupFormFields>;
}

interface IStepTwoProps {
  control: any;
  errors: FieldErrors<SignupFormFields>;
  isLoading?: boolean;
}

const Signup = () => {
  const [step, setStep] = React.useState(1);

  const router = useRouter();
  const mutation = useRegister();

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormFields) => {
    await mutation.mutateAsync(data, {
      onSuccess: (data) => {
        router.push("/login");
        notifySuccess("Account created successfully.");
      },
      onError: (error) => {
        console.log(error);
        const msg = extractAxiosError(error);
        notifyError(msg);
      },
    });
  };

  const handleStep = async (step: number) => {
    const hasNoErrors = await trigger(["name", "email"], { shouldFocus: true });
    console.log({ hasNoErrors });
    if (!hasNoErrors) {
      return;
    }

    if (step === 1) {
      setStep(1);
    } else setStep(2);
  };

  return (
    <AuthLayout
      heading="First, create an account"
      subHeading="A simple text should be here, nothing serious."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[592px] flex flex-col items-center"
      >
        {step === 1 ? (
          <StepOne handleStep={handleStep} control={control} errors={errors} />
        ) : (
          <StepTwo control={control} errors={errors} />
        )}
        <div className="text-center mt-8">
          <h3 className="text-[#808080] text-sm leading-5">
            Already have an account?
          </h3>
          <Link href="/auth/login">
            <Button
              isLoading={mutation.isLoading}
              className="text-sm leading-5 font-medium text-[#006A4E]"
            >
              Login
            </Button>
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;

const StepOne = ({ handleStep, control, errors }: IStepOneProp) => {
  return (
    <div className="w-full flex flex-col gap-y-5">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            label="full name"
            placeholder="full name"
            required
            type="text"
            errorMsg={errors.name?.message}
            {...field}
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
            placeholder="email address"
            errorMsg={errors.email?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="tech_niche"
        control={control}
        render={({ field }) => <FormSelect {...field} />}
      />

      <div className="mt-4">
        <Button
          className="w-full bg-[#0D703C] rounded-md py-[10px] font-medium text-[18px] leading-[28px] text-white"
          type="button"
          onClick={() => handleStep(2)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const StepTwo = ({ control, errors, isLoading }: IStepTwoProps) => {
  return (
    <div className="w-full flex flex-col gap-y-5">
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <Input
            label="phone no."
            placeholder="+234"
            required
            type="number"
            errorMsg={errors.phone?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="linkedIn"
        control={control}
        render={({ field }) => (
          <Input
            label="linkenln profile"
            placeholder="linkenln profile"
            type="text"
            errorMsg={errors.linkedIn?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            label="password"
            placeholder="password"
            required
            type="password"
            passwordText
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
            label="Confirm Password"
            placeholder="confirm password"
            required
            type="password"
            passwordText
            errorMsg={errors.password_confirmation?.message}
            {...field}
          />
        )}
      />

      <p className="text-sm text-center leading-5 text-[#B6B6B6] mt-5">
        By signing up, you are agreeing to our Terms of Service and Privacy
        Policy
      </p>
      <div className="mt-4">
        <Button
          className="w-full bg-[#0D703C] rounded-md py-[10px] font-medium text-[18px] leading-[28px] text-white"
          type="submit"
          isLoading={isLoading}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};
