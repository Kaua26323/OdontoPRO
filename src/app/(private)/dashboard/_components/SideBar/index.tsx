"use client"

import { ReactNode, useState } from "react";
import { clsx } from "clsx";
import { Briefcase, CalendarCheck2, ChevronLeft, ChevronRight, CreditCard, List, UserRoundCog, X, } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SidebarLinks } from "../SidebarLinks";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LogoOdontoPRO from "../../../../../../public/logo-odonto.png";
import { Collapsible } from "@/components/ui/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";

export function SidebarDashboard({ children }: { children: ReactNode }){
  const [isOpen, setIsOpen] = useState(false); 

  const pathname = usePathname();
  
  return(
    <div className="flex min-h-screen w-full">

      <aside 
        className={clsx("flex flex-col border-r bg-background transition-all duration-300 p-4 h-full", {
          "w-20": !isOpen,
          "w-64": isOpen,
          "hidden md:flex md:fixed": true
        })}
      >

        <div className="mb-4 mt-4  ">
          {isOpen ? (
            <Image
            src={LogoOdontoPRO}
            alt="Logo da clinica"
            quality={100}
            priority
          />
          ): (
            <div className="w-full flex justify-center">
              <div className="bg-green-500 w-8 h-8 rounded-full transition-all hover:scale-110 hover:bg-green-400 duration-500"></div>
            </div>
          )}
        </div>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx("bg-zinc-900 cursor-pointer hover:scale-105 hover:bg-zinc-700 duration-300",{
            "self-end": isOpen,
            "self-center": !isOpen,
          })}
          size="icon-lg"
        >
          {isOpen ? <ChevronLeft className="w-10 h-10"/> : <ChevronRight className="w-15 h-15"/> }
        </Button>

        {!isOpen && (
          <nav className="flex flex-col gap-1 pl-1 mt-2">
            <SidebarLinks
              href="/dashboard"
              label="Agendamentos"
              icon={<CalendarCheck2 className="w-6 h-6"/>}
              pathname={pathname}
              isOpen={isOpen}
              isMobile={true}
            />

            <SidebarLinks
              href="/dashboard/services"
              label="Serviços"
              icon={<Briefcase className="w-6 h-6"/>}
              pathname={pathname}
              isOpen={isOpen}
              isMobile={true}
            />

            <SidebarLinks
              href="/dashboard/profile"
              label="Meu perfil"
              icon={<UserRoundCog className="w-6 h-6"/>}
              pathname={pathname}
              isOpen={isOpen}
              isMobile={true}
            />

            <SidebarLinks
              href="/dashboard/plans"
              label="Planos"
              icon={<CreditCard className="w-6 h-6"/>}
              pathname={pathname}
              isOpen={isOpen}
              isMobile={true}
            />
          </nav>
        )}


        <Collapsible open={isOpen}>
          <CollapsibleContent>
            <nav className="flex flex-col gap-1 overflow-hidden">
              <span className="text-sm text-gray-400 font font-medium uppercase">
                Painel
              </span>
      
              <SidebarLinks
                href="/dashboard"
                label="Agendamentos"
                icon={<CalendarCheck2 className="w-6 h-6"/>}
                pathname={pathname}
                isOpen={isOpen}
              />

              <SidebarLinks
                href="/dashboard/services"
                label="Serviços"
                icon={<Briefcase className="w-6 h-6"/>}
                pathname={pathname}
                isOpen={isOpen}
              />

              <span
                className="text-sm text-gray-400 font font-medium mt-2.5 uppercase"
              >
                Configurações
              </span>

              <SidebarLinks
                href="/dashboard/profile"
                label="Meu perfil"
                icon={<UserRoundCog className="w-6 h-6"/>}
                pathname={pathname}
                isOpen={isOpen}
              />

              <SidebarLinks
                href="/dashboard/plans"
                label="Planos"
                icon={<CreditCard className="w-6 h-6"/>}
                pathname={pathname}
                isOpen={isOpen}
              />
            </nav>
          </CollapsibleContent>
        </Collapsible>

      </aside>

      <div className={clsx("flex flex-1 flex-col transition-all duration-300", {
        "md:ml-20": !isOpen,
        "md:ml-64":  isOpen,
      })}>

        <header
          className="md:hidden flex items-center justify-between border-b px-2 md:px-6 h-14 z-16
          sticky top-0 bg-zinc-300"
        >
          <Sheet>
            <div className="flex items-center gap-4">
              <SheetTrigger asChild>
                <Button
                  onClick={() => setIsOpen(true)}
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                >
                  <List className="w-5 h-5" />
                </Button>

              </SheetTrigger>

              <h1 className="text-base md:text-lg font-semibold">
                Menu OdontoPRO
              </h1>

              <SheetContent
                side="left"
                className="sm:max-w-xs p-5 gap-1.5 text-black [&>button.absolute]:hidden"
              >
                
                <div className="flex items-center justify-between"> 
                  <SheetTitle className="text-2xl font-semibold">
                    OdontoPRO
                  </SheetTitle>

                  <SheetClose asChild>
                    <X className="h-7 w-7 text-gray-500 hover:text-red-600 hover:scale-110 transition-all duration-300"/>
                  </SheetClose>
                </div>

                <SheetDescription className="text-lg">
                  Menu administrativo.
                </SheetDescription>

                <nav className="grid gap-2 text-base pt-5">
                  <SidebarLinks
                    href="/dashboard"
                    label="Agendamentos"
                    icon={<CalendarCheck2 className="w-6 h-6"/>}
                    pathname={pathname}
                    isOpen={isOpen}
                  />
                  <SidebarLinks
                    href="/dashboard/services"
                    label="Serviços"
                    icon={<Briefcase className="w-6 h-6"/>}
                    pathname={pathname}
                    isOpen={isOpen}
                  />
                  <SidebarLinks
                    href="/dashboard/profile"
                    label="Meu perfil"
                    icon={<UserRoundCog className="w-6 h-6"/>}
                    pathname={pathname}
                    isOpen={isOpen}
                  />
                  <SidebarLinks
                    href="/dashboard/plans"
                    label="Planos"
                    icon={<CreditCard className="w-6 h-6"/>}
                    pathname={pathname}
                    isOpen={isOpen}
                  />
                </nav>

              </SheetContent>
            </div>
          </Sheet>
        </header>

        <main className="flex-1 py-4 px-2 md:p-6">
          {children}
        </main>
      </div>  
    </div>
  )
}