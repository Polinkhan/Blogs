import { cn } from "@/lib/utils";
import { DivProps } from "@/types/types.elements";
import React from "react";

interface DotProps extends DivProps {
  asSeparator?: boolean;
}

export const Dot = ({ className, asSeparator, ...rest }: DotProps) => {
  let classes = "h-3.5 w-3.5 bg-gray-500";
  if (asSeparator) classes = "h-1 w-1 bg-gray-300";
  return <div className={cn("rounded-full", classes, className)} {...rest} />;
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
