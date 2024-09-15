import { cn } from "@/lib/utils";
import { DivProps } from "@/types/types.elements";
import React from "react";

export const Dot = ({ className, ...rest }: DivProps) => {
  return <div className={cn("h-3.5 w-3.5 bg-gray-500 rounded-full", className)} {...rest} />;
};

export const ThreeDots = () => {
  return (
    <div className="flex space-x-2">
      <Dot className="bg-[#f95f57]" />
      <Dot className="bg-[#fabd2f]" />
      <Dot className="bg-[#27c93f]" />
    </div>
  );
};
