"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NavLinks } from "../NavLinks/index";
import { useState } from "react";

export function Header(){
  const [isOpen, setIsOpen] = useState(false);

  return(
    <header
      className="fixed top-0 right-0 left-0 py-4 px-4 bg-zinc-300 z-999"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"
          className="text-3xl font-bold md:text-4xl"  
        >
          Odonto<span className="text-emerald-500">Pro</span>  
        </Link>

        <nav className="hidden md:flex">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              className="font-bold hover:bg-gray-600 duration-300"
            >
              <Menu className="w-7 h-7"/>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px] sm:w-[300px] p-4 flex flex-col gap-1 z-9999 [&>button.absolute]:hidden">
            
            <div className="flex justify-between items-center">
              <SheetTitle className="text-2xl">
                Menu
              </SheetTitle>

              <SheetClose asChild>
                <X className="w-6 h-6 text-gray-700 hover:text-red-600 hover:scale-110 transition-all duration-300"/>
              </SheetClose>
            </div>

            <SheetDescription>
              Veja nossos links
            </SheetDescription>
            

            <nav className="flex flex-col">
              <NavLinks closeNavLinks={() => setIsOpen(false)}/>
            </nav>
          </SheetContent>

        </Sheet>
      </div>
    </header>
  )
}