"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Session } from "next-auth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const NavProfile = ({ data }: { data: Session }) => {
  const isProfileComplete = data.user.completeProfile;

  return (
    <>
      {isProfileComplete ? <CreateLink /> : <CreateAlert />}

      <Popover>
        <PopoverTrigger>
          <Avatar className="size-8">
            <AvatarImage src={data.user.image || ""} alt="@shadcn" />
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

const CreateLink = () => {
  return (
    <Link href={"/create"}>
      <Button variant={"link"}>Create yours</Button>
    </Link>
  );
};

const CreateAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"link"}>Create yours</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Your profile is not updated</AlertDialogTitle>
          <AlertDialogDescription>
            There&apos;s some information that we need before you post an article, to complete please click &quot;Update
            profile&quot;
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Link href={"/complete-profile"}>
            <AlertDialogAction>Update profile</AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NavProfile;
