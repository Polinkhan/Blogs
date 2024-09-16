"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const NavSignIn = () => {
  const currentPath = usePathname();

  return (
    <Link
      href={{
        pathname: "/login",
        query: { next: currentPath },
      }}
    >
      <Button variant={"ghost"}>Sign in</Button>
    </Link>
  );
};

export default NavSignIn;
