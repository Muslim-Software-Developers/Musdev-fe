import { forwardRef } from "react";
import { cn } from "@/utils/helpers";
import ErrorMessage from "../forms/ErrorMessage";

interface SelectProps {
  label: string;
  placeholder: string;
  options: { label: string; value: string }[];
  errorMsg?: string;
  className?: string;
  required?: boolean;
}

const Select = forwardRef(
  (
    { label, placeholder, options, required, errorMsg, ...rest }: SelectProps,
    ref: any,
  ) => (
    <div className={cn("flex flex-col gap-y-2", rest.className)}>
      {label && (
        <label
          className="font-medium text-sm leading-5 capitalize"
          htmlFor={label}
        >
          {label} {required && <span className="text-[#E73152] ">*</span>}
        </label>
      )}

      <select
        ref={ref}
        placeholder={placeholder}
        {...rest}
        className="border border-[#808080] border-solid rounded-md px-[10px] py-3 placeholder:capitalize"
      >
        <option hidden>Choose from below</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMsg && <ErrorMessage msg={errorMsg} />}
    </div>
  ),
);

Select.displayName = "Select";

export default Select;
