import AuthLayout from "@/components/layout/authLayout";
import React from "react";
import Link from "next/link";
import Logo from "../../assets/Logo.png";
import NextImage from "next/image";
import Input from "@/components/forms/Input";
import FormSelect from "@/components/forms/FromSelect";
import Button from "@/components/button";

const Signup = () => {
  const [step, setStep] = React.useState<number>(1);
  const handleStep = (step: number) => {
    if (step === 1) {
      setStep(1);
    } else setStep(2);
  };
  return (
    <AuthLayout
      heading="First, create an account"
      subHeading="A simple text should be here, nothing serious."
    >
      <div className="w-[592px] flex flex-col items-center">
        {step === 1 ? <StepOne handleStep={handleStep} /> : <StepTwo />}
        <div className="text-center mt-8">
          <h3 className="text-[#808080] text-sm leading-5">
            Already have an account?
          </h3>
          <Button className="text-sm leading-5 font-medium text-[#006A4E]">
            Login
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;

interface IStepOneProp {
  handleStep: (step: number) => void;
}
const StepOne = ({ handleStep }: IStepOneProp) => {
  return (
    <div className="w-full flex flex-col gap-y-5">
      <Input label="full name" placeholder="full name" required type="text" />
      <Input label="email" placeholder="email" required type="email" />
      <FormSelect name="tech niche" />
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

const StepTwo = () => {
  return (
    <div className="w-full flex flex-col gap-y-5">
      <Input label="phone no." placeholder="+234" required type="number" />
      <Input
        label="linkenln profile"
        placeholder="linkenln profile"
        required
        type="text"
      />
      <Input label="password" placeholder="password" required type="password" passwordText/>
      <p className="text-sm leading-5 text-[#B6B6B6] mt-5">
        By signing up, you are agreeing to our Terms of Service and Privacy
        Policy
      </p>
      <div className="mt-4">
        <Button
          className="w-full bg-[#0D703C] rounded-md py-[10px] font-medium text-[18px] leading-[28px] text-white"
          type="button"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};
