import { login } from "@/lib/lib";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// import { signIn } from "@/auth";

export async function GET(request: NextApiRequest) {
  try {
    await login({});
    // await signIn("credentials", { email, password });
    return NextResponse.json({ status: true });
  } catch (error) {
    // if (error.type === "CredentialsSignin") {
    //   res.status(401).json({ error: "Invalid credentials." });
    // } else {
    //   res.status(500).json({ error: "Something went wrong." });
    // }
  }
}
