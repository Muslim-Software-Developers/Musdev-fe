import { spawn } from "child_process";
import React from "react";

interface IInput {
  name?: string;
  required?: boolean;
  type: string;
  label: string;
  placeholder: string;
  passwordText?: boolean;
}

const Input = ({
  name,
  required,
  type,
  label,
  placeholder,
  passwordText,
}: IInput) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label
        className="font-medium text-sm leading-5 capitalize"
        htmlFor={label}
      >
        {label} {required && <span className="text-[#E73152] ">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        className="border boreder-[#808080] border-solid rounded-md px-[10px] py-3 placeholder:capitalize "
      />
      {passwordText && (
        <span className="text-sm leading-5 text-[#808080]">
          At least 10 characters, with a touch of int & Strings but more is fine
          too.
        </span>
      )}
    </div>
  );
};

export default Input;
