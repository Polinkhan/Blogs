import { LayoutProps } from "@/types/types.layout";
import React from "react";

const AuthLayout = ({ children }: LayoutProps) => {
  return <main className="h-full grid place-items-center">{children}</main>;
};

export default AuthLayout;
