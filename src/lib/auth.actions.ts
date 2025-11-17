"use server";

import { signIn } from "next-auth/react";

export async function handleRegister(provider: string) {
  await signIn(provider, { redirectTo: "/dashboard" });
}
