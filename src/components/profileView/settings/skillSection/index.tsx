import React from "react";
import Button from "@/components/button";
import Input from "@/components/forms/Input";
import { SearchIcon } from "@/components/svgs";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { SkillFields, skillSchema } from "@/utils/schema";

const SkillSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(skillSchema),
    defaultValues: {
      skills: "",
    },
  });

  const onSubmit = (data: SkillFields) => {
    console.log(data);
  };

  const heading = "text-neutral01 tracking-[0.12px] text-2xl font-bold";

  return (
    <div>
      <h1 className={heading}>Your Skills</h1>

      <div className="flex items-center relative mt-8">
        <Controller
          name="skills"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              placeholder="e.g React, HTML, CSS"
              errorMsg={errors.skills?.message}
              {...field}
              className="w-full"
            />
          )}
        />
        <div className="absolute top-5 right-2">
          <SearchIcon />
        </div>
      </div>

      <div className="pt-10">
        <Button
          type="button"
          variant="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default SkillSection;
