"use client";

import { Button } from "@/components/ui/button";
import { Loader, LogIn } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { handleRegister } from "../../_actions/login";

interface NavLinksProps {
  closeNavLinks?: () => void;
}

export function NavLinks({ closeNavLinks }: NavLinksProps) {
  const { data: session, status } = useSession();

  const navItems = [
    { href: "#profissionais", label: "Profissionais" },
    { href: "/contatos", label: "Contatos" },
  ];

  async function handleLogin() {
    await handleRegister("github");
  }

  return (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          asChild
          onClick={closeNavLinks}
          className="bg-transparent text-black text-xl hover:bg-transparent hover:scale-105 duration-300"
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}

      {status === "loading" ? (
        <div className="flex items-center pl-4">
          <Loader className="text-slate-900 animate-spin" size={30} />
        </div>
      ) : session ? (
        <Link
          href="dashboard"
          className="w-full bg-black flex justify-center items-center p-1.5 rounded-sm text-white font-bold cursor-pointer hover:scale-105 
          hover:bg-gray-900 transition-all duration-300 sm:text-xl"
        >
          Acessar Clinicas
        </Link>
      ) : (
        <Button
          onClick={handleLogin}
          className="flex items-center gap-2 cursor-pointer sm:text-lg"
        >
          <LogIn className="text-white" />
          Portal da Clinica
        </Button>
      )}
    </>
  );
}
