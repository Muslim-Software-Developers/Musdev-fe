import { useGetPostCategories } from "@/hooks/blogs";
import { CreatePostPayload } from "@/hooks/blogs/types";
import Image from "next/image";
import React, { useState } from "react";

const DropDownList = ({
  category,
  setPostObj,
  setShowDropDownList,
}: {
  category: number;
  setPostObj: React.Dispatch<(prev: CreatePostPayload) => CreatePostPayload>;
  setShowDropDownList: React.Dispatch<boolean>;
}) => {
  const { data: blogCategories } = useGetPostCategories();

  console.log(blogCategories);

  const dropDownItemsStyle =
    "py-4 px-4 hover:bg-dropDownBg hover:text-dropDownColor hover:cursor-pointer text-[16px] md:text-[20px] flex flex-row justify-between items-center";

  const [showSubList, setShowSubList] = useState<boolean>(false);

  const setCategory = (id: number) => {
    setPostObj((prev: CreatePostPayload) => {
      return { ...prev, category_id: id };
    });
  };

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
      onClick: () => setShowSubList((prev) => !prev),
      icon: "/images/arrowDown.png",
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

  const subList = {
    product: {
      name: "Product",
      slug: "product",
      id: 1,
    },
    design: {
      name: "Design",
      slug: "design",
      id: 2,
    },
    cybersecurity: {
      name: "Cybersecurity",
      slug: "cybersecurity",
      id: 3,
    },
    digitalMarketing: {
      name: "Digital marketing",
      slug: "digitalMarketing",
      id: 4,
    },
    softwareEngineering: {
      name: "Software engineering",
      slug: "softwareEngineering",
      id: 5,
    },
    data: {
      name: "Data",
      slug: "data",
      id: 6,
    },
    others: {
      name: "Others",
      slug: "others",
      id: 7,
    },
  };

  return (
    <ul className="absolute top-28 w-[200px] md:w-[250px] border-[1px] border-neutral05  bg-white rounded-md shadow-md z-10">
      <span className="absolute -z-1 w-[18px] h-[18px] transform rotate-45 right-5 bg-white border-[1px]  border-r-0 border-b-0 border-neutral05 -top-[9.8px] rounded-tl-lg"></span>

      <span className="relative z-2 w-full h-full overflow-hidden rounded-md">
        {optionsList.map((item, index) => (
          <li
            key={index}
            className={dropDownItemsStyle}
            onClick={() => item.onClick()}
          >
            {item.title}
            {item?.icon ? (
              <Image
                width={10}
                height={5}
                style={{ width: 15, height: 15 }}
                src={item.icon}
                alt="dropDown"
              />
            ) : (
              ""
            )}
          </li>
        ))}
      </span>

      {showSubList ? (
        <ul
          className="absolute -left-24 top-20 md:-left-64 md:top-32 z-2 w-full overflow-hidden bg-white border-[1px] rounded-md z-10"
          onClick={() => setShowSubList(false)}
        >
          {Object.keys(blogCategories).map((listItem: string) => {
            return (
              <li
                onClick={() =>
                  setCategory(subList[listItem as keyof typeof subList].id)
                }
                className={`${dropDownItemsStyle} ${
                  category === subList[listItem as keyof typeof subList].id
                    ? "bg-slate-500"
                    : ""
                }`}
                key={listItem}
              >
                {subList[listItem as keyof typeof subList].name}
              </li>
            );
          })}
        </ul>
      ) : null}
    </ul>
  );
};

export default DropDownList;
