import React from "react";

interface Props {
  enableEditMode: () => void;
}

const EducationSection = ({ enableEditMode }: Props) => {
  return (
    <div className="w-full flex justify-between items-start">
      <div className="text-neutral01 font-bold text-sm tracking-[0.112px] space-y-[3px]">
        <h2 className="capitalize">tomorrow university</h2>
        <p className="text-[#808080] font-normal">
          Artificial Intelligence and sustainable technologies, Bachelor&apos;s
        </p>
        <p className="text-[#808080] font-normal">2025</p>
      </div>
      <div
        className="flex items-center gap-x-2 cursor-pointer"
        onClick={enableEditMode}
      >
        <span className="font-medium text-[#0D706E] text-[11px] tracking-[0.367px]">
          Edit
        </span>
        <span>
          <img src="/icons/arrow-circle.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default EducationSection;
