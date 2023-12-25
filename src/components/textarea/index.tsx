import { cn } from "@/utils/helpers";
import React, { forwardRef } from "react";
import ErrorMessage from "../forms/ErrorMessage";

interface TextareaProps {
  label: string;
  placeholder: string;
  errorMsg?: string;
  className?: string;
  required?: boolean;
}

const Textarea = forwardRef(
  (
    { label, placeholder, required, errorMsg, ...rest }: TextareaProps,
    ref: any,
  ) => (
    <div className={cn("flex flex-col w-full gap-y-2", rest.className)}>
      {label && (
        <label
          className="font-medium text-sm leading-5 capitalize"
          htmlFor={label}
        >
          {label} {required && <span className="text-[#E73152] ">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        placeholder={placeholder}
        className="border border-[#808080] border-solid h-[150px] rounded-md px-[10px] py-3 placeholder:capitalize"
        {...rest}
      />
      {errorMsg && <ErrorMessage msg={errorMsg} />}
    </div>
  ),
);

Textarea.displayName = "Textarea";

export default Textarea;
