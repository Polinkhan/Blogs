import CustomTabs from "@/components/custom/CustomTabs";
import { TabListType } from "@/types/types.component";
import React from "react";
import BlogCard from "./components/BlogCard";

const Home = () => {
  // --------------------------------------------
  // Data
  // --------------------------------------------

  const tabList: TabListType[] = [
    { label: "All", component: <BlogCard /> },
    { label: "React", component: <BlogCard /> },
    {
      label: "Typescript",
      component: (
        <div className="flex flex-col space-y-5">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[800px] mx-auto">
      <CustomTabs tabList={tabList} />
    </div>
  );
};

export default Home;
