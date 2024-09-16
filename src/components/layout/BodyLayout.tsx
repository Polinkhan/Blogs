import { BodyLayoutProps } from "@/types/types.layout";

const BodyLayout = ({ children }: BodyLayoutProps) => {
  return <div className="py-5 max-w-[850px] mx-auto">{children}</div>;
};

export default BodyLayout;
