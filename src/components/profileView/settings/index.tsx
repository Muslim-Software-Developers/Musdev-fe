import React from "react";
import { ProfileProps } from "@/hooks/auth/types";
import Education from "./education";
import Button from "@/components/button";
import SkillSection from "./skillSection";
import ProfileEdit from "./profileEdit";
import SocialLinks from "./socialLinks";
import WorkExperienceSection from "./workExperienceSection";

interface Props {
  data?: ProfileProps;
}

const Settings = ({ data }: Props) => {
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
          <ProfileEdit data={data} />
          <SocialLinks />
          <WorkExperienceSection works={data?.work || []} />
          <Education />
          <SkillSection />
        </form>
      </section>
    </div>
  );
};

export default Settings;
