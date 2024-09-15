import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  const imageSize = 200;
  return (
    <Link href={"blogs/blogs_id"}>
      <Card className="shadow-none border-none flex space-x-6 pr-7 cursor-pointer hover:shadow-lg">
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
              <CardTitle>Creating a Custom useFetch Hook with axios in React for API Requests</CardTitle>
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

        <div className={`w-[${imageSize}px] my-auto`}>
          <AspectRatio ratio={16 / 11}>
            <Image
              alt="Image"
              layout="fill"
              className="rounded-md object-cover"
              src="http://139.162.17.88:8081/blog_upload/user_2687169411_1725831650615.jpg"
            />
          </AspectRatio>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
