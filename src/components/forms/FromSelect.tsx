import React from "react";

interface IFormSelect {
  name: string;
  required?: boolean;
}

const FormSelect = ({ name, required }: IFormSelect) => {
  return (
    <div className='w-full flex flex-col gap-y-2'>
      <label
        className="font-medium text-sm leading-5 capitalize"
        htmlFor={name}
      >
        {name} {required && <span className="text-[#E73152] ">*</span>}
      </label>
      <select name="" id={name} className="w-full border boreder-[#808080] border-solid rounded-md px-[10px] py-3">
        <option value="" className="capitalize">Choose from below</option>
      </select>
    </div>
  );
};

export default FormSelect;
