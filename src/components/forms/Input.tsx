import React, { forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";
import { UseFormRegister } from "react-hook-form";

interface IInput {
  name?: string;
  required?: boolean;
  type: string;
  label: string;
  placeholder: string;
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
    <div className="flex flex-col gap-y-2">
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
        className="border boreder-[#808080] border-solid rounded-md px-[10px] py-3 placeholder:capitalize "
        {...rest}
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
