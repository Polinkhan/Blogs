import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { CalendarIcon } from "@radix-ui/react-icons";

const ProfileView = () => {
  return (
    <div className="flex items-center space-x-3">
      <Avatar className="size-12">
        <AvatarFallback>P</AvatarFallback>
      </Avatar>
      <div>
        <HoverCard>
          <HoverCardTrigger className="text-sm font-medium hover:underline cursor-pointer">
            Abu Sayed Polin
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <h4 className="text-sm font-semibold">Abu Sayed Polin</h4>
                <h4 className="text-xs font-semibold text-muted-foreground">Software Engineer</h4>
                <a className="text-xs font-medium hover:underline" href="https://www.brotecs.com/">
                  Brotecs Technologies Limited
                </a>
                <div className="flex items-center pt-2">
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">Joined December 2021</span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <p className="text-xs text-muted-foreground">abusayedpolin@gmail.com</p>
      </div>
    </div>
  );
};

export default ProfileView;
