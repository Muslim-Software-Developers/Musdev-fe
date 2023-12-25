import { useGetTechCategories } from "@/hooks/auth";
import React, { LegacyRef, forwardRef } from "react";

interface IFormSelect {
  name: string;
  required?: boolean;
}

const FormSelect = forwardRef(
  (
    { name, required, ...rest }: IFormSelect,
    ref?: LegacyRef<HTMLSelectElement>,
  ) => {
    const { data } = useGetTechCategories();

    return (
      <div className="w-full flex flex-col gap-y-2">
        <label
          className="font-medium text-sm leading-5 capitalize"
          htmlFor={name}
        >
          {name} {required && <span className="text-[#E73152] ">*</span>}
        </label>
        <select
          ref={ref}
          name={name}
          id={name}
          className="w-full border boreder-[#808080] border-solid rounded-md px-[10px] py-3"
          {...rest}
        >
          <option value="" className="capitalize">
            Choose from below
          </option>

          {data &&
            Object.keys(data)?.map((key) => (
              <option key={key} value={key} className="capitalize">
                {/* @ts-ignore */}
                {data[key]}
              </option>
            ))}
        </select>
      </div>
    );
  },
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
