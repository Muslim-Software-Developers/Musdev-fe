import React, { useState } from "react";
import WorkExperienceEdit from "./editMode";
import WorkExperience from "./experience";
import { WorkProps } from "@/hooks/auth/types";

interface Props {
  works: WorkProps[];
}

const WorkExperienceSection = ({ works }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const enableEditMode = () => setIsEditMode(true);
  const disableEditMode = () => setIsEditMode(false);

  const heading = "text-neutral01 tracking-[0.12px] text-2xl font-bold";

  return (
    <div>
      <h1 className={heading}>
        Work Experience {!isEditMode && <span>Edit</span>}
      </h1>
      <div className="mt-8">
        {isEditMode || works.length === 0 ? (
          <WorkExperienceEdit closeEdit={disableEditMode} />
        ) : (
          <WorkExperience works={works} enableEditMode={enableEditMode} />
        )}
      </div>
    </div>
  );
};

export default WorkExperienceSection;
