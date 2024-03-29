import Input from "@/components/forms/Input";
import AuthLayout from "@/components/layout/authLayout";
import React from "react";
import Button from "@/components/button";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <AuthLayout
      heading="Reset your password"
      subHeading="Enter your email to reset your password"
    >
      <div className="w-full">
        <Input type="email" label="email address" placeholder="email address" />
        <div className="mt-6">
          <Button
            className="w-full bg-primary rounded-md py-[10px] font-medium text-[18px] leading-[28px] text-white"
            type="button"
            onClick={() => {}}
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
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
