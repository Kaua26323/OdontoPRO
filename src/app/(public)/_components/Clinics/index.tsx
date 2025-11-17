import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import doctorImage from "../../../../../public/foto1.png";
import { ArrowRight } from "lucide-react";

export function Clinics() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12 font-bold">
          Clinicas Disponíveis
        </h2>

        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card className="overflow-hidden pt-0">
            <CardContent className="p-0">
              <div>
                <div className="relative h-48">
                  <Image
                    src={doctorImage}
                    alt="Imagem ilustrativa da clinica."
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="px-4 pt-4 space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold sm:text-lg">Clinica Centro</h3>
                    <p className="text-gray-600">
                      Rua x, centro, Campo grande MS
                    </p>
                  </div>
                  <div className="bg-green-400 w-4 h-4 rounded-full"></div>
                </div>

                <Link
                  href="#"
                  className="flex items-center justify-center bg-green-500 py-2 rounded-md font-bold text-white
                  text-sm sm:text-base hover:bg-green-400 hover:scale-105 transition-all duration-300"
                >
                  Agendar Horário
                  <ArrowRight className="ml-2" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
}
