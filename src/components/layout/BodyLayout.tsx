import { BodyLayoutProps } from "@/types/types.layout";

const BodyLayout = ({ children }: BodyLayoutProps) => {
  return <div className="py-5 max-w-[750px] mx-auto flex-1 flex flex-col">{children}</div>;
};

export default BodyLayout;
