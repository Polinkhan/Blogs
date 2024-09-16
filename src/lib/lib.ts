// import { cookies } from "next/headers";
// import { SignJWT, jwtVerify } from "jose";
import { getServerSession } from "next-auth";
// import { TOKEN_SECRET } from "@/common/config";
import { options } from "@/app/api/auth/[...nextauth]/options";

// const key = new TextEncoder().encode(TOKEN_SECRET);

// // --------------------------------------------
// // Encrypting session
// // --------------------------------------------
// export const encrypt = async (payload: any) => {
//   return await new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("10 sec from now")
//     .sign(key);
// };

// // --------------------------------------------
// // Decrypting session
// // --------------------------------------------
// export const decrypt = async (input: string) => {
//   const { payload } = await jwtVerify(input, key, {
//     algorithms: ["HS256"],
//   });

//   return payload;
// };

// // --------------------------------------------
// // Login with session
// // --------------------------------------------
// export const login = async (formData: FormData) => {
//   const user = { name: "Polin" };

//   // Create the session
//   const expires = new Date(Date.now() + 5 * 1000);
//   const session = await encrypt({ user, expires });

//   // Save the session in a cookie
//   cookies().set("session", session, { expires, httpOnly: true });
// };

// // --------------------------------------------
// // Session
// // --------------------------------------------
// export const getSession = async () => {
//   const session = cookies().get("session")?.value;
//   if (!session) return null;
//   return await decrypt(session);
// };

// export const setSession = async (session: any, expires: any) => {
//   cookies().set("session", session, { expires, httpOnly: true });
// };

export const getNextServerSession = async () => {
  const session = await getServerSession(options);
  return session;
};
