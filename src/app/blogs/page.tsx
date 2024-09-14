import BodyLayout from "@/components/layout/BodyLayout";
import BlogsView from "@/pages/BlogsView";
import React from "react";

const Blogs = async () => {
  return (
    <BodyLayout>
      <BlogsView />
    </BodyLayout>
  );
};

export default Blogs;
