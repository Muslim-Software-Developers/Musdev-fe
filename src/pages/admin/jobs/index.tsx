import React, { useState } from "react";
import Button from "@/components/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { useGetJobs } from "@/hooks/jobs";
import JobRowItem from "@/components/admin/jobItem";
import { useToggle } from "@/hooks/useToggle";
import { CreateJobModal } from "@/components/modals";
import ViewJobModal from "@/components/modals/viewJobModal";
import { JobProps } from "@/hooks/jobs/types";

const Jobs = () => {
  const { isLoading, data } = useGetJobs();
  const [currentJobDetail, setCurrentJobDetail] = useState<JobProps>();
  const [isCreateJobModalOpen, toggleCreateJobModal] = useToggle(false);
  const [isViewJobModalOpen, toggleViewJobModal] = useToggle(false);

  return (
    <section className="pt-[55px] px-4 lg:px-8 bg-[#F0FFFF] pb-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">New Jobs</h2>
        <Button
          onClick={toggleCreateJobModal}
          variant="primary"
          className="w-fit"
        >
          Post a new job
        </Button>
      </div>

      <Table className="mt-6" isLoading={isLoading}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-bold">Title</TableHead>
            <TableHead className="font-bold">Company Name</TableHead>
            <TableHead className="font-bold">Position</TableHead>
            <TableHead className="text-center font-bold">Description</TableHead>
            {/* <TableHead className="text-center font-bold">Created At</TableHead> */}
            <TableHead className="text-center font-bold">View</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.map((d, idx) => (
            <JobRowItem
              key={idx}
              data={d}
              onClick={() => {
                setCurrentJobDetail(d);
                toggleViewJobModal();
              }}
            />
          ))}
        </TableBody>
      </Table>

      {isCreateJobModalOpen ? (
        <CreateJobModal
          isOpen={isCreateJobModalOpen}
          closeModal={toggleCreateJobModal}
        />
      ) : null}

      {isViewJobModalOpen ? (
        <ViewJobModal
          isOpen={isViewJobModalOpen}
          closeModal={toggleViewJobModal}
          currentJobDetail={currentJobDetail}
        />
      ) : null}
    </section>
  );
};

export default Jobs;
