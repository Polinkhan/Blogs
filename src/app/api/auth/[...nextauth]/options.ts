import { db } from "@/lib/prisma";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    // This will be called after the user signs in
    signIn: async ({ user, account }) => {
      if (!user.email) return false;

      let dbUser = await db.users.findUnique({ where: { email: user.email } });

      // If the user does not exist, create a new user in the database
      if (!dbUser) {
        dbUser = await db.users.create({
          data: {
            email: user.email,
            providerId: user.id,
            completeProfile: false, // Mark as incomplete profile
            photoUrl: user.image || "",
            name: user.name || "Anonymous",
            provider: account?.provider || "unknown",
          },
        });
      }

      return true;
    },

    // This callback includes the custom `id` field in the session
    session: async ({ session }) => {
      if (session.user && session.user.email) {
        const dbUser = await db.users.findUnique({ where: { email: session.user.email } });
        if (dbUser) {
          session.user.id = dbUser.id;
          session.user.completeProfile = dbUser.completeProfile;
        }
      }
      return session;
    },
  },
};
