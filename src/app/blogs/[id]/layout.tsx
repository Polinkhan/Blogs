import BodyLayout from "@/components/layout/BodyLayout";
import { LayoutProps } from "@/types/types.layout";
import React from "react";

const Layout = ({ children }: LayoutProps) => {
  return <BodyLayout>{children}</BodyLayout>;
};

export default Layout;
