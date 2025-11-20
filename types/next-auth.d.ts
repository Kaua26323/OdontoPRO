import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }
}

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified?: null | string | boolean;
  image?: string;
  adress?: string;
  phone?: string;
  status: boolean;
  stripe_id?: string;
  time: string[];
  createdAt?: string;
  updatedAt?: string;
}
