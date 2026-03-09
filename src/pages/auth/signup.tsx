import AuthLayout from "@/components/layout/authLayout";
import React from "react";
import Link from "next/link";

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

  const onSubmit = (data: SignupFormFields) => {
    mutation.mutate(data, {
      onSuccess: (data) => {
        router.push("/auth/login");
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
  <div></div>
  );
};

export default Signup;

const StepOne = ({ handleStep, control, errors }: IStepOneProp) => {
  return (
   <div></div>
  );
};

const StepTwo = ({ control, errors, isLoading }: IStepTwoProps) => {
  return (
   <div></div>
  );
};
