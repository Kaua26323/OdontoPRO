import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from "../../../../../public/doctor-hero.png";

export function Hero(){
  return(
    <section className="container mx-auto pb-4 px-4 ">
      <main className="flex items-center justify-center">
        <article className="max-w-3xl flex flex-col justify-center  space-y-5">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl tracking-tight">
            Encontre os melhores profissionais em um único local!
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl">
            Nós somos uma plataforma para profissionais da saúde com foco em agilizar seu atendimento de forma simplificada e organizada.
            Profissionais disponíveis
          </p>
          <Button
            className="w-fit bg-emerald-500 self-center px-6 text-lg sm:self-start hover:bg-emerald-300 transition-all hover:scale-105 duration-300"
          >
            Encontrar uma clinica.
          </Button>
        </article>
        <div className="hidden lg:block">
          <Image
            src={doctorImg}
            alt="hero-Logo"
            width={330}
            height={400}
            className="object-contain"
            priority={true}
          />
        </div>
      </main>
    </section>
  )
}