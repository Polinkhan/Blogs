import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type userType = {
  id: string;
  name: string;
  email: string;
  provider: string;
  providerId: string;
  completeProfile: boolean;
  designation: string | null;
  portfolioUrl: string | null;
  company: string | null;
  companyUrl: string | null;
  phone: string | null;
  photoUrl: string;
  createdAt: Date;
} | null;

const CompleteProfileView = ({ user }: { user: userType }) => {
  return (
    <Card className="w-[550px] my-auto">
      <CardHeader>
        <CardTitle className="text-xl">Complete your profile</CardTitle>
        <CardDescription>Enter your credentials</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <Input label="Name" placeholder="Name" value={user?.name} disabled />
            <Input label="Email" placeholder="Email" value={user?.email} disabled />
            <Input label="Provider" placeholder="Account Provider" value={user?.provider} disabled />
            <Input type="tel" label="Phone" name="phone" placeholder="Phone" defaultValue={""} />
            <Input
              type="text"
              label="Company name"
              name="company"
              placeholder="Company name"
              defaultValue={user?.company || ""}
            />
            <Input
              type="url"
              name="companyUrl"
              label="Company websile"
              placeholder="Company websile"
              defaultValue={user?.companyUrl || ""}
            />
            <Input
              type="text"
              name="designation"
              label="Designation"
              placeholder="Your Designation"
              defaultValue={user?.designation || ""}
            />
            <Input
              type="url"
              label="Portfolio"
              name="portfolioUrl"
              placeholder="Your Portfolio"
              defaultValue={user?.portfolioUrl || ""}
            />
          </div>

          <Button type="submit" className="">
            Update
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CompleteProfileView;
