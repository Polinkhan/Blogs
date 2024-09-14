import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CustomTabs = () => {
  const imageSize = 60;
  const styles = `h-[${imageSize * 3}px] w-[${imageSize * 4}px]`;

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="react">React</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="typescript">Typescript</TabsTrigger>
        <TabsTrigger value="elasticsearch">Elasticsearch</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <Card className="shadow-none border-none flex space-x-6 pr-4">
          <div className="flex-1">
            <CardHeader className="flex-row space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm text-muted-foreground">Abu Sayed Polin</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <CardTitle>
                  Creating a Custom useFetch Hook with axios in React for API Requests
                </CardTitle>
                <CardDescription>Custom hook for easier API request with axios.</CardDescription>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex space-x-5">
                <p className="text-sm text-muted-foreground">Sep 08, 2024</p>
                <p className="text-sm text-muted-foreground">Likes : 0</p>
                <p className="text-sm text-muted-foreground">Comment : 0</p>
              </div>
            </CardFooter>
          </div>
          <div className={`my-auto relative flex items-center ${styles}`}>
            <Image
              layout="fill"
              objectFit="cover"
              className="rounded-3xl "
              alt="Descriptive alt text"
              src={"https://miro.medium.com/v2/resize:fit:1400/1*G9RTy_Z3G498wFK5c7ziqQ.png"}
            />
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default CustomTabs;
