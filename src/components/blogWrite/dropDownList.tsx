import React from "react";

const DropDownList = ({
  setShowDropDownList,
}: {
  setShowDropDownList: React.Dispatch<boolean>;
}) => {
  const dropDownItemsStyle =
    "py-4 px-4 hover:bg-greenHover hover:text-neutral01 text-[16px] md:text-[20px] ";

  const optionsList = [
    {
      title: "Share draft link",
      onClick: () =>
        setTimeout(() => {
          setShowDropDownList(false);
        }, 100),
    },
    {
      title: "Share publication",
      onClick: () => console.log("Share draft link clicked"),
    },
    {
      title: "Add main topics",
      onClick: () => console.log("Share draft link clicked"),
    },
    {
      title: "Add other topics",
      onClick: () => console.log("Share draft link clicked"),
    },
    {
      title: "Settings",
      onClick: () => console.log("Share draft link clicked"),
    },
  ];

  return (
    <ul className="absolute top-28 w-[200px] md:w-[250px] border-[1px] border-neutral05  bg-white rounded-md shadow-md">
      <span className="absolute -z-1 w-[18px] h-[18px] transform rotate-45 right-5 bg-white border-[1px]  border-r-0 border-b-0 border-neutral05 -top-[9.8px] rounded-tl-lg"></span>

      <span className="relative z-2 w-full h-full overflow-hidden rounded-md">
        {optionsList.map((item, index) => (
          <li
            key={index}
            className={dropDownItemsStyle}
            onClick={() => item.onClick()}
          >
            {item.title}
          </li>
        ))}
      </span>
    </ul>
  );
};

export default DropDownList;
