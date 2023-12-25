import React from "react";
import { TableCell, TableRow } from "../table";
import { JobProps } from "@/hooks/jobs/types";
import Button from "../button";
import Link from "next/link";

const JobRowItem = ({
  data,
  onClick,
}: {
  data?: JobProps;
  onClick: () => void;
}) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{data?.title}</TableCell>
      <TableCell>{data?.company_name}</TableCell>
      <TableCell>{data?.position}</TableCell>
      <TableCell className="">{data?.description}</TableCell>
      {/* <TableCell className="text-right">
        {new Date(data?.createdAt).toLocaleString()}
      </TableCell> */}
      <TableCell className="text-right">
        {/* <Link href={`/admin/jobs/${data?.slug}`}> */}
        <Button
          onClick={onClick}
          className="border border-primary text-primary px-6 py-2 rounded-lg"
        >
          View
        </Button>
        {/* </Link> */}
      </TableCell>
    </TableRow>
  );
};

export default JobRowItem;
