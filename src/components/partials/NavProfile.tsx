"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

const NavProfile = ({ data }: any) => {
  return (
    <>
      <Link href={"/create"}>
        <Button variant={"link"}>Create yours</Button>
      </Link>
      <Popover>
        <PopoverTrigger>
          <Avatar className="size-8">
            <AvatarImage src={data.user.image} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="max-w-60">
          <Button
            variant={"destructive"}
            className="w-full"
            onClick={() => {
              "use client";
              signOut();
            }}
          >
            Logout
          </Button>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default NavProfile;
