import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../dialog";
import Button from "../button";
import { JobProps } from "@/hooks/jobs/types";

interface CreateJobModalProps {
  isOpen: boolean;
  closeModal: () => void;
  currentJobDetail?: JobProps;
}

const mappedKeys: Record<string, string> = {
  title: "Job Title",
  slug: "",
  image: "",
  section: "Job Category",
  company_name: "Company Name",
  employment_type: "Employment Type",
  position: "Position",
  description: "Job Description",
  qualifications: "Qualifications",
  responsibilities: "Responsibilities",
  listed_on: "Posted On",
  expires_at: "Expires On",
};

const ViewJobModal = ({
  isOpen,
  closeModal,
  currentJobDetail,
}: CreateJobModalProps) => {
  // remove slug, image properties from object
  delete currentJobDetail?.slug;
  delete currentJobDetail?.image;

  return (
    <Dialog open={isOpen}>
      <DialogContent closeModal={closeModal}>
        <DialogHeader>
          <DialogTitle className="!text-2xl">Job Details</DialogTitle>
        </DialogHeader>

        <div className="py-6">
          {currentJobDetail &&
            Object.keys(currentJobDetail).map((key) => (
              <p key={key} className="mb-4">
                <strong>{mappedKeys[key]}: </strong>

                <span>{currentJobDetail && currentJobDetail[key]}</span>
              </p>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewJobModal;
