import React, { Fragment } from "react";
import Input from "@/components/forms/Input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileFormFields, profileSchema } from "@/utils/schema";
import { ProfileProps } from "@/hooks/auth/types";
import Education from "./education";
import WorkExperienceSection from "./workExperienceSection";
import Button from "@/components/button";
import SkillSection from "./skillSection";
import { useUpdateProfile } from "@/hooks/auth";
import { notifySuccess } from "@/utils/toast";
import ErrorMessage from "@/components/forms/ErrorMessage";

interface Props {
  data?: ProfileProps;
}

interface IProps {
  control: any;
  errors: any;
}

const SocialLinks = ({ control, errors }: IProps) => {
  const heading = "text-neutral01 tracking-[0.12px] text-2xl font-bold";

  return (
    <div className="mt-6">
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
            name="github"
            control={control}
            render={({ field }) => (
              <Input
                label="Github"
                placeholder="Github"
                type="text"
                errorMsg={errors.github?.message}
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
      </div>
    </div>
  );
};

const ProfileEdit = ({ control, errors }: IProps) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center flex-wrap md:flex-nowrap gap-10">
        {/* <Controller
          name="display_name"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              label="Display Name"
              placeholder="Display Name"
              errorMsg={errors.display_name?.message}
              {...field}
              className="w-full"
            />
          )}
        /> */}

        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              type="text"
              required
              label="Full Name"
              placeholder="Full Name"
              errorMsg={errors.name?.message}
              {...field}
              className="w-full"
            />
          )}
        />
      </div>

      <div className="flex items-center flex-wrap md:flex-nowrap gap-10">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              label="Phone number"
              placeholder="+234"
              required
              type="number"
              errorMsg={errors.phone?.message}
              {...field}
              className="w-full"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              type="email"
              label="Email address"
              placeholder="Email address"
              errorMsg={errors.email?.message}
              {...field}
              className="w-full"
            />
          )}
        />
      </div>

      <div className="flex items-center flex-wrap md:flex-nowrap gap-10">
        <Controller
          name="years"
          control={control}
          render={({ field }) => (
            <Input
              type="number"
              label="Years of experience"
              placeholder="Years of experience"
              errorMsg={errors.years_of_experience?.message}
              {...field}
              className="w-full"
            />
          )}
        />
        <Controller
          name="primary_role"
          control={control}
          render={({ field }) => (
            <Input
              type="string"
              label="Primary role"
              placeholder="Primary role"
              errorMsg={errors.years_of_experience?.message}
              {...field}
              className="w-full"
            />
          )}
        />
      </div>

      <Controller
        name="bio"
        control={control}
        render={({ field }) => (
          <div className="flex flex-col gap-y-2">
            <label
              className="font-medium text-sm leading-5 capitalize"
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              id="bio"
              placeholder="Bio"
              className="border border-[#808080] border-solid rounded-md px-[10px] py-3 placeholder:capitalize h-40 w-full"
              {...field}
            />
            {errors.bio?.message && <ErrorMessage msg={errors.bio?.messageF} />}
          </div>
        )}
      />
    </div>
  );
};

const Settings = ({ data }: Props) => {
  const mutation = useUpdateProfile();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      // display_name: "",
      name: data?.user.name,
      phone: data?.user.phone,
      email: data?.user.email,
      primary_role: data?.user.role,
      years: parseInt(data?.years || "0"),
      bio: data?.bio,
      portfolio: "",
      linkenIn: "",
      github: "",
      twitter: "",
    },
  });

  const onSubmit = (data: ProfileFormFields) => {
    mutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        notifySuccess("Profile update successfully");
      },
    });
  };

  const heading = "text-neutral01 tracking-[0.12px] text-2xl font-bold";

  return (
    <div className="border border-solid border-[#B6B6B6] rounded-[20px] bg-white py-8 px-4 md:px-16 divide-y divide-solid divide-[#B7B7B7]">
      <div className="pb-6 mb-8 space-y-5 border-b border-solid border-[#E1E1FB]">
        <div>
          <h1 className="tracking-[0.12px] text-2xl font-bold text-[#11142D]">
            Account
          </h1>
          <p className="text-[#808080] text-xl tracking-[0.1px] capitalize">
            avatar
          </p>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-2xl tracking-[0.072px] font-bold w-16 h-16 rounded-full bg-[#BFE2E2] text-[#0D706E] flex items-center justify-center">
            az
          </span>
          <div className="space-x-4">
            <Button variant="primary">Upload</Button>
            <Button variant="outline" className="border-2 text-neutral01">
              Remove
            </Button>
          </div>
        </div>
      </div>

      <section className="pt-8">
        <h2 className={heading}>Profile Edit</h2>

        <form className="mt-8 space-y-8">
          <div>
            <ProfileEdit control={control} errors={errors} />
            <SocialLinks control={control} errors={errors} />

            <div className="mt-6">
              <Button
                type="button"
                variant="primary"
                isLoading={mutation.isLoading}
                onClick={handleSubmit(onSubmit, (errors) =>
                  console.log(errors),
                )}
              >
                Save Changes
              </Button>
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="font-medium text-[#11142D] text-2xl tracking-[0.12px]">
                Delete Account
              </h2>
              <p className="tarcking-[0.08px] text-[#92929D] text-base">
                By deleting your account you will lose all your data
              </p>
            </div>
            <div>
              <Button className="bg-[#E73152] text-white rounded-lg tracking-[0.367px] text-[11px] font-medium px-4 py-2">
                Delete Account
              </Button>
            </div>
          </div> */}

          <WorkExperienceSection works={data?.work || []} />
          <Education />
          <SkillSection />
        </form>
      </section>
    </div>
  );
};

export default Settings;
