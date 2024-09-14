import { BodyLayoutProps } from "@/types/types.layout";

const BodyLayout = ({ children }: BodyLayoutProps) => {
  return <div className="px-20 py-5">{children}</div>;
};

export default BodyLayout;
