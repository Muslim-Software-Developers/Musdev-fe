import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagination.module.css";

interface IPaginationProps {
  itemsPerPage: number;
  pageCount: number;
  handlePageClick: (selectedItem: { selected: number }) => void;
}

export function Pagination({
  itemsPerPage,
  pageCount,
  handlePageClick,
}: IPaginationProps) {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        breakClassName={styles["page-item"]}
        pageClassName={styles["page-item"]}
        previousClassName={styles["page-item"]}
        nextClassName={styles["page-item"]}
        disabledLinkClassName={styles["disabled"]}
        containerClassName={styles["container"]}
        activeLinkClassName={styles["active"]}
        breakLinkClassName={styles["page-link"]}
        pageLinkClassName={styles["page-link"]}
        previousLinkClassName={styles["npage-link"]}
        nextLinkClassName={styles["npage-link"]}
      />
    </>
  );
}
