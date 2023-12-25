import React, { useState } from "react";
import BlogItem from "./blogItem";
import { useGetTrendingPosts } from "@/hooks/blogs";
import { Pagination } from "../pagination";

const TrendingArticles = () => {
  const { isLoading, data } = useGetTrendingPosts();

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil((data?.length || 0) / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % (data?.length || 0);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  if (isLoading) {
    return (
      <div className="h-40 text-center">
        <p className="text-bold text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <section className="wrapper mt-[7rem] mb-[5rem]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Trending Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems?.map((blog) => (
            <BlogItem key={blog.slug} blog={blog} />
          ))}
        </div>

        <div className="flex justify-center items-center mt-20">
          <Pagination
            itemsPerPage={itemsPerPage}
            handlePageClick={handlePageClick}
            pageCount={pageCount}
          />
        </div>
      </div>
    </section>
  );
};

export default TrendingArticles;
