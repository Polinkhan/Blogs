import { getNextServerSession } from "@/lib/lib";
import { db } from "@/lib/prisma";
import CompleteProfileView from "@/pages/CompleteProfileView";
import React from "react";

const CompleteProfile = async () => {
  const session = await getNextServerSession();
  const user = await db.users.findUnique({ where: { id: session?.user.id } });
  return <CompleteProfileView user={user} />;
};

export default CompleteProfile;
