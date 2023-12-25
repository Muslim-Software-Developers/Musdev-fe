import React from "react";
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
import EventRowItem from "@/components/admin/eventRowItem";

const Events = () => {
  //   const { isLoading, data } = useGetEvents();
  let isLoading = false;
  const [isCreateJobModalOpen, toggleCreateJobModal] = useToggle(false);

  return (
    <section className="pt-[55px] px-4 lg:px-8 bg-[#F0FFFF] pb-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <Button
          onClick={toggleCreateJobModal}
          variant="primary"
          className="w-fit"
        >
          Add a new event
        </Button>
      </div>

      <Table className="mt-6" isLoading={isLoading}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-bold">Title</TableHead>
            <TableHead className="font-bold">Name of Event</TableHead>
            <TableHead className="font-bold">Description</TableHead>
            <TableHead className="text-center font-bold">
              Event Details
            </TableHead>
            {/* <TableHead className="text-center font-bold">Created At</TableHead> */}
            <TableHead className="text-center font-bold">View</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[]?.map((d, idx) => (
            <EventRowItem key={idx} data={d} />
          ))}
        </TableBody>
      </Table>

      {/* {isCreateJobModalOpen ? (
        <CreateJobModal
          isOpen={isCreateJobModalOpen}
          closeModal={toggleCreateJobModal}
        />
      ) : null} */}
    </section>
  );
};

export default Events;
