import React, { useState } from "react";
import Button from "../button";
import Input from "@/components/forms/Input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileFormFields, profileSchema } from "@/utils/schema";
import {
  WorkExperience,
  WorkExperienceEdit,
} from "@/components/profileSetting/work-experience";
import {
  Education,
  EducationEdit,
} from "@/components/profileSetting/education";
import { SearchIcon } from "@/components/icons";
interface IEditObject {
  experience: string;
  education: string;
}
const Settings = () => {
  const [search, setSearch] = useState<string>("");
  const [edit, setEdit] = useState<IEditObject>({
    experience: "",
    education: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const displayEditForm = (text: string) => {
    if (text === "experience")
      setEdit((edit: IEditObject) => ({ ...edit, experience: "experience" }));
    else if (text === "education")
      setEdit((edit: IEditObject) => ({ ...edit, education: "education" }));
  };
  const closeEdit = (text: string) => {
    if (text === "experience")
      setEdit((edit: IEditObject) => ({ ...edit, experience: "" }));
    else if (text === "education")
      setEdit((edit: IEditObject) => ({ ...edit, education: "" }));
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormFields>({
    // resolver: yupResolver(profileSchema),
    defaultValues: {
      display_name: "",
      full_name: "",
      phone: "",
      email: "",
      primary_role: "",
      years_of_experience: 0,
      bio: "",
      portfolio: "",
      linkenIn: "",
      github: "",
      twitter: "",
      company: "",
      title: "",
      start_date: "",
      end_date: "",
      description: "",
      college_name: "",
      course_of_study: "",
      graduation: "",
      skills: "",
    },
  });

  const heading = "text-neutral01 tracking-[0.12px] text-2xl font-bold";
  return (
    <div className="border border-solid border-[#B6B6B6] rounded-[20px] bg-white py-8 px-16 divide-y divide-solid divide-[#B7B7B7]">
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
          <div className="space-y-8">
            <div className="flex items-center gap-x-10">
              <Controller
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
              />
              <Controller
                name="full_name"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    required
                    label="Full Name"
                    placeholder="Full Name"
                    errorMsg={errors.full_name?.message}
                    {...field}
                    className="w-full"
                  />
                )}
              />
            </div>
            <div className="flex items-center gap-x-10">
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
            <div className="flex items-center gap-x-10">
              <Controller
                name="years_of_experience"
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
                <Input
                  type="string"
                  label="Bio"
                  placeholder="Bio"
                  errorMsg={errors.bio?.message}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <h2 className={heading}>Social links</h2>
            <div className="space-y-8 mt-8">
              <div className="flex items-center gap-x-10">
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
              <div className="flex items-center gap-x-10">
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
          <div className="flex items-center justify-between">
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
          </div>
          <div>
            <h1 className={heading}>
              Work Experience{" "}
              {edit.experience === "experience" && <span>Edit</span>}
            </h1>
            <div className="mt-8">
              {edit.experience !== "experience" ? (
                <WorkExperience
                  edit={edit.experience}
                  displayEditForm={() => displayEditForm("experience")}
                />
              ) : (
                <WorkExperienceEdit
                  edit={edit.experience}
                  closeEdit={() => closeEdit("experience")}
                />
              )}
            </div>
          </div>
          <div>
            <h1 className={heading}>
              Education {edit.education === "education" && <span>Edit</span>}
            </h1>
            <div className="mt-8">
              {edit.education !== "education" ? (
                <Education
                  edit={edit.education}
                  toggleEdit={() => displayEditForm("education")}
                />
              ) : (
                <EducationEdit
                  edit={edit.education}
                  closeEdit={() => closeEdit("education")}
                />
              )}
            </div>
          </div>
          <div>
            <h1 className={heading}>Your Skills</h1>
            {/* <div className="border border-solid border-[#808080] rounded-[4px]">
              <input
                type="text"
                name={search}
                placeholder="e.g React, HTML, CSS"
                onChange={handleChange}
                className="placeholder:text-[#808080] placeholder:text-sm placeholder:tracking-[0.112px] p-2"
              />
            </div> */}
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
          </div>
          <div className="pt-10">
            <Button variant="primary">Save All changes</Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Settings;
