import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { login } from "@/lib/lib";
import { redirect } from "next/navigation";
import ProvidersButton from "./components/ProvidersBtn";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

const LoginView = () => {
  return (
    <div className="w-[350px] space-y-4">
      <div className=" px-4 w-full flex items-center space-x-1">
        <GoArrowLeft className="mt-[-0.1px]" />
        <Link href={"/blogs"} className="text-xs font-medium text-muted-foreground">
          Go back
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Login to your account</CardTitle>
          <CardDescription>Enter your credentials</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <form
            className="space-y-4"
            action={async (formData) => {
              "use server";
              await login(formData);
              redirect("/blogs");
            }}
          >
            <div className="space-y-2">
              <Input name="email" placeholder="Email" />
              <Input name="password" placeholder="Password" />
            </div>
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>

          <div className="flex items-center space-x-5">
            <Separator className="flex-1" />
            <p>OR</p>
            <Separator className="flex-1" />
          </div>

          <div className="flex flex-col space-y-3">
            <ProvidersButton />
          </div>

          <p className="text-xs font-medium text-muted-foreground">
            Don't have an account?
            <Link href={"register"} className="text-blue-600 hover:underline">
              {" "}
              register now
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginView;
