"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const ProvidersButton = () => {
  const params = useSearchParams();
  const nextURL = params?.get("next") || "/";

  const handleProviderLogin = async (type: "google" | "github") => {
    await signIn(type, { redirect: true, callbackUrl: nextURL });
  };
  return (
    <>
      <Button variant={"outline"} className="relative" onClick={() => handleProviderLogin("google")}>
        <FcGoogle className="size-5 absolute left-3 top-1/5" />
        Continue with Google
      </Button>
      <Button variant={"outline"} className="relative" onClick={() => handleProviderLogin("github")}>
        <FaGithub className="size-5 absolute left-3 top-1/5" />
        Continue with Github
      </Button>
    </>
  );
};

export default ProvidersButton;
