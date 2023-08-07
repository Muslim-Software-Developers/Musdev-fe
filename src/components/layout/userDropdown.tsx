import React from "react";
import ArrowDownIcon from "../icons/arrowDown";

const UserDropdown = () => {
  return (
    <div className="flex items-center gap-2 text-[#808080]">
      <div className="w-8 h-8 rounded-full bg-slate-300"></div>
      <p>Habib Sagir</p>
      <span>
        <ArrowDownIcon />
      </span>
    </div>
  );
};

export default UserDropdown;
