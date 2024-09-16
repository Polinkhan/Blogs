import BodyLayout from "@/components/layout/BodyLayout";
import Footer from "@/components/partials/Footer";
import { Navbar } from "@/components/partials/Navbar";
import { RootLayoutProps } from "@/types/types.layout";
import React from "react";

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-60px)] flex flex-col">
        <BodyLayout>{children}</BodyLayout>
      </main>
      <Footer />
    </>
  );
};
export default RootLayout;
