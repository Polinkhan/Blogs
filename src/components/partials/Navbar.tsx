import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="px-20 h-[60px] flex justify-between items-center border-b border-gray-100">
      <div className="flex space-x-5 items-center">
        <Link href={"/"}>
          <h4 className="text-2xl font-bold">Blogs</h4>
        </Link>
        <div className="bg-slate-100 w-[200px] px-3 py-2 rounded-full cursor-pointer">
          <p className="text-sm text-muted-foreground">Search</p>
        </div>
      </div>

      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};
