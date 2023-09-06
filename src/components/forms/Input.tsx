import React, { forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";
import { UseFormRegister } from "react-hook-form";
import { cn } from "@/utils/helpers";

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  required?: boolean;
  label?: string;
  passwordText?: boolean;
  errorMsg?: string;
}

const Input = forwardRef(
  (
    {
      name,
      required,
      type,
      label,
      errorMsg,
      placeholder,
      passwordText,
      ...rest
    }: IInput,
    ref: any,
  ) => (
    <div className={cn("flex flex-col gap-y-2", rest.className)}>
      <label
        className="font-medium text-sm leading-5 capitalize"
        htmlFor={label}
      >
        {label} {required && <span className="text-[#E73152] ">*</span>}
      </label>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        id={label}
        {...rest}
        className="border border-[#808080] border-solid rounded-md px-[10px] py-3 placeholder:capitalize"
      />
      {errorMsg && <ErrorMessage msg={errorMsg} />}
      {passwordText && (
        <span className="text-sm leading-5 text-[#808080]">
          At least 10 characters, with a touch of int & Strings but more is fine
          too.
        </span>
      )}
    </div>
  ),
);

Input.displayName = "Input";

export default Input;
