import React from "react";
import Input from "@/components/forms/Input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SocialFormFields, socialSchema } from "@/utils/schema";
import Button from "@/components/button";
import { useUpdateSocials } from "@/hooks/auth";
import { notifySuccess } from "@/utils/toast";

const SocialLinks = () => {
  const mutation = useUpdateSocials();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(socialSchema),
    defaultValues: {
      portfolio: "",
      linkenIn: "",
      repository: "",
      twitter: "",
    },
  });

  const onSubmit = (data: SocialFormFields) => {
    const payload = {
      socials: {
        website: data?.portfolio,
        repository: data?.repository,
        twitter: data?.twitter,
        linkedin: data?.linkenIn,
      },
    };
    mutation.mutate(payload, {
      onSuccess: (data) => {
        console.log(data);
        notifySuccess("Profile update successfully");
      },
    });
  };

  const heading = "text-neutral01 tracking-[0.12px] text-2xl font-bold";

  return (
    <div className="mt-12">
      <h2 className={heading}>Social links</h2>
      <div className="space-y-8 mt-8">
        <div className="flex items-center flex-wrap md:flex-nowrap gap-10">
          <Controller
            name="portfolio"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                label="Website/Portfolio"
                placeholder="Website/Portfolio"
                errorMsg={errors.portfolio?.message}
                {...field}
                className="w-full"
              />
            )}
          />
          <Controller
            name="linkenIn"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                label="LinkenIn"
                placeholder="LinkenIn"
                errorMsg={errors.linkenIn?.message}
                {...field}
                className="w-full"
              />
            )}
          />
        </div>
        <div className="flex items-center flex-wrap md:flex-nowrap gap-10">
          <Controller
            name="repository"
            control={control}
            render={({ field }) => (
              <Input
                label="Github (or others)"
                placeholder="Github"
                type="text"
                errorMsg={errors.repository?.message}
                {...field}
                className="w-full"
              />
            )}
          />
          <Controller
            name="twitter"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                label="Twitter"
                placeholder="Twitter"
                errorMsg={errors.twitter?.message}
                {...field}
                className="w-full"
              />
            )}
          />
        </div>

        <div className="mt-6">
          <Button
            type="button"
            variant="primary"
            isLoading={mutation.isLoading}
            onClick={handleSubmit(onSubmit, (errors) => console.log(errors))}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
