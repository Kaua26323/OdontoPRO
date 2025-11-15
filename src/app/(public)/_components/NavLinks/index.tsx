import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

interface NavLinksProps{
  closeNavLinks?: () => void;
}

export function NavLinks({ closeNavLinks  }: NavLinksProps){

  const navItems = [
    {href: "#profissionais", label: "Profissionais"},
    {href: "/contatos", label: "Contatos"}
  ];

  const session = true;

  return(
    <>
      {navItems.map((item) => (
          <Button 
            key={item.href}
            asChild
            onClick={ closeNavLinks }
            className="bg-transparent text-black hover:bg-transparent hover:scale-105 duration-300"
          >
            <Link href={item.href}>
              {item.label}
            </Link>
          </Button>
        ))}

        {session ? (  
          <Link href="dashboard"
            className="w-full bg-black flex justify-center items-center p-1.5 rounded-sm text-white font-bold hover:scale-105 hover:bg-gray-900 transition-all duration-300"
          >
            Acessar Clinica
          </Link>
        ): (
          <Button>
            <LogIn/>
            Portal da Clinica
          </Button>
        )}
    </>
  )
}