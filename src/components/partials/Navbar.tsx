import React, { ReactNode } from "react";
import Link from "next/link";
import NavProfile from "./NavProfile";
import NavSignIn from "./NavSignIn";
import { getNextServerSession } from "@/lib/lib";

export const Navbar = async () => {
  const data = await getNextServerSession();

  const isAuthenticate = !!data;

  return (
    <NavbarLayout>
      {!isAuthenticate && <NavSignIn />}
      {isAuthenticate && <NavProfile data={data} />}
    </NavbarLayout>
  );
};

const NavbarLayout = ({ children }: { children: ReactNode }) => {
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
