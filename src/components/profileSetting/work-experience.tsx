import React from "react";
import Input from "../forms/Input";
import { Controller, useForm } from "react-hook-form";
import { ProfileFormFields } from "@/utils/schema";
import Button from "../button";

interface IEdit {
  edit: string;
  displayEditForm?: () => void;
  closeEdit?: () => void;
}
export const WorkExperience = (props: IEdit) => {
  return (
    <div className="w-full flex gap-x-8 flex-col md:flex-row">
      <span className="bg-[#E73152] rounded-[5px] w-[90px] h-[90px] inline-block mb-8 md:mb-0"></span>
      <div className="w-full space-y-[9px]">
        <div className="w-full flex justify-between">
          <h2 className="capitalize text-black text-2xl font-semibold">
            lead designer
          </h2>
          <div
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={props.displayEditForm}
          >
            <span className="font-medium text-[#0D706E] text-[11px] tracking-[0.367px]">
              Edit
            </span>
            <span>
              <img src="/icons/arrow-circle.svg" alt="" />
            </span>
          </div>
        </div>
        <div className="space-y-[9px]">
          <div>
            <h3 className="text-[#808080] font-semibold text-xl">Musdev</h3>
            <p className="-tracking-[1px] text-[#808080] text-base">
              May 2023 to present
            </p>
          </div>
          <p className="-tracking-[1px] text-[#808080] text-base">
            Collaborated with partners across product and engineering to define,
            build, and release new products and features. Construct user flows,
            wireframes, and prototypes that effectively communicate design
            concepts. Collaborated with partners across product and engineering
            to define, build, and release new products and features. Construct
            user flows, wireframes, and prototypes that effectively communicate
            design concepts. Collaborated with partners across product and
            engineering to define, build, and release new products and features.
            Construct user flows, wireframes, and prototypes that effectively
            communicate design concepts. Collaborated with partners across
            product and engineering to define, build, and release new products
            and features. Construct user flows, wireframes, and prototypes that
            effectively communicate design concepts.
          </p>
        </div>
      </div>
    </div>
  );
};

export const WorkExperienceEdit = (props: IEdit) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormFields>({
    // resolver: yupResolver(profileSchema),
    defaultValues: {
      company: "",
      title: "",
      start_date: "",
      end_date: "",
      description: "",
    },
  });

  return (
    <div className="space-y-8 mt-8">
      <div className="flex items-center gap-x-10">
        <Controller
          name="company"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label="Company"
              placeholder="Company"
              errorMsg={errors.company?.message}
              {...field}
              className="w-full"
              required
            />
          )}
        />
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label="Title"
              placeholder="Title"
              errorMsg={errors.title?.message}
              {...field}
              className="w-full"
              required
            />
          )}
        />
      </div>
      <div className="flex gap-x-10">
        <Controller
          name="start_date"
          control={control}
          render={({ field }) => (
            <Input
              label="Start Date"
              placeholder="Start date"
              type="text"
              errorMsg={errors.start_date?.message}
              {...field}
              className="w-full"
              required
            />
          )}
        />
        <div className="w-full space-y-[6px]">
          <Controller
            name="end_date"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                label="End Date"
                placeholder="End Date"
                errorMsg={errors.end_date?.message}
                {...field}
                className="w-full"
                required
              />
            )}
          />
          <div className="space-x-[11px]">
            <input type="checkbox" />
            <label className="text-sm text-[#808080] font-medium">
              I currently work here
            </label>
          </div>
        </div>
      </div>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Input
            label="Description"
            placeholder="Description"
            type="text"
            errorMsg={errors.description?.message}
            {...field}
            className="w-full"
            required
          />
        )}
      />
      <div>
        <Button variant="primary" type="button" onClick={props.closeEdit}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};
