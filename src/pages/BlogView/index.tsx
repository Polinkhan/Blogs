import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import CodeView from "./components/CodeView";
import ProfileView from "@/components/partials/ProfileView";

const BlogView = () => {
  return (
    <div className="">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Creating a Custom useFetch Hook with axios in React for API Requests
        </CardTitle>
        <CardDescription>Custom hook for easier API request with axios</CardDescription>
      </CardHeader>
      <CardContent>
        <ProfileView />
      </CardContent>
      <CardFooter>
        <div className="flex space-x-5">
          <p className="text-sm text-muted-foreground">Sep 08, 2024</p>
          <p className="text-sm text-muted-foreground">Likes : 0</p>
          <p className="text-sm text-muted-foreground">Comment : 0</p>
        </div>
      </CardFooter>

      <Separator />

      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <Image
            alt="Image"
            layout="fill"
            className="rounded-md object-cover"
            src="http://139.162.17.88:8081/blog_upload/user_2687169411_1725831650615.jpg"
          />
        </AspectRatio>
      </CardHeader>

      <CardContent className="space-y-10">
        <p className="text-justify">
          When building React applications, managing API requests efficiently is crucial. React&apos;s functional
          components and hooks provide a way to handle asynchronous tasks, like fetching data from an API. To simplify
          this process, we can create a custom hook that handles various HTTP request methods (GET, POST, PUT, DELETE)
          using Axios. In this post, we&apos;ll explore a custom hook called useFetch that provides a reusable solution
          for making API calls.
        </p>

        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Overview of useFetch</h4>
          <p className="text-justify">
            The useFetch hook encapsulates the logic for making API requests, managing loading states, handling errors,
            and aborting requests when a component unmounts. It takes advantage of React&apos;s useState and useEffect
            hooks to manage the state and side effects related to API calls.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl font-semibold">The Code</h4>
          <CodeView />
        </div>

        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Key Features of useFetch</h4>
          <li>Supports multiple HTTP methods (GET, POST, PUT, DELETE).</li>
          <li>Handles request cancellation using the AbortController.</li>
          <li>Allows re-fetching of data based on dependencies.</li>
          <li>Simplifies the logic for making API calls and managing responses.</li>
        </div>

        <div className="space-y-2">
          <h4 className="text-xl font-semibold">Hook Parameters</h4>
          <p className="font-medium">The useFetch hook takes the following parameters:</p>
          <li>Supports multiple HTTP methods (GET, POST, PUT, DELETE).</li>
          <li>Handles request cancellation using the AbortController.</li>
          <li>Allows re-fetching of data based on dependencies.</li>
          <li>Simplifies the logic for making API calls and managing responses.</li>
        </div>
      </CardContent>
    </div>
  );
};

export default BlogView;
