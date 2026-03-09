import { WorkProps } from "@/hooks/auth/types";
import { Fragment } from "react";

interface Props {
  enableEditMode?: () => void;
  works: WorkProps[];
}

const ExperienceItem = ({
  work,
  enableEditMode,
}: {
  work: WorkProps;
  enableEditMode?: () => void;
}) => (
  <div className="w-full flex gap-x-8 mb-8">
    <span className="bg-[#E73152] rounded-[5px] w-[90px] h-[90px] inline-block"></span>

    <div className="w-full space-y-[9px]">
      <div className="w-full flex justify-between">
        <h2 className="capitalize text-black text-2xl font-semibold">
          {work.title}
        </h2>
        {enableEditMode && (
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
        )}
      </div>
      <div className="space-y-[9px]">
        <div>
          <h3 className="text-[#808080] font-semibold text-xl">
            {work.company}
          </h3>
          <p className="-tracking-[1px] text-[#808080] text-base">
            {work.is_current
              ? `${work.start} - Present`
              : `${work.start} - ${work.end}`}
          </p>
        </div>
        <p className="text-[#808080] text-base">{work.description}</p>
      </div>
    </div>
  </div>
);

const WorkExperience = ({ enableEditMode, works }: Props) => {
  return (
    <Fragment>
      {works.map((work, idx) => (
        <ExperienceItem key={idx} work={work} enableEditMode={enableEditMode} />
      ))}
    </Fragment>
  );
};

export default WorkExperience;
