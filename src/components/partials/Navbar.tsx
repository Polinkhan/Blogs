import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { getServerSession } from "next-auth/next";
import NavProfile from "./NavProfile";
import NavSignIn from "./NavSignIn";

export const Navbar = async () => {
  const data = await getServerSession();
  const isAuthenticate = !!data;

  return (
    <NavbarLayout>
      {!isAuthenticate && <NavSignIn />}
      {isAuthenticate && <NavProfile data={data} />}
    </NavbarLayout>
  );
};

const NavbarLayout = ({ children }: any) => {
  return (
    <nav className="px-20 h-[60px] flex justify-between items-center border-b border-gray-100">
      <div className="flex space-x-5 items-center">
        <Link href={"/blogs"}>
          <h4 className="text-2xl font-bold">Blogs</h4>
        </Link>
        <div className="bg-slate-100 w-[200px] px-3 py-2 rounded-full cursor-pointer">
          <p className="text-sm text-muted-foreground">Search</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">{children}</div>
    </nav>
  );
};
