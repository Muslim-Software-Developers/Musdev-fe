import React, { useState } from "react";
import EducationEdit from "./editMode";
import EducationSection from "./educationSection";

const Education = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const enableEditMode = () => setIsEditMode(true);
  const disableEditMode = () => setIsEditMode(false);

  const heading = "text-neutral01 tracking-[0.12px] text-2xl font-bold";

  return (
    <div>
      <h1 className={heading}>Education {!isEditMode && <span>Edit</span>}</h1>
      <div className="mt-8">
        {isEditMode ? (
          <EducationEdit closeEdit={disableEditMode} />
        ) : (
          <EducationSection enableEditMode={enableEditMode} />
        )}
      </div>
    </div>
  );
};

export default Education;
