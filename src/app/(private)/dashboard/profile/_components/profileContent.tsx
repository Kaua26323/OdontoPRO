"use client";

import { Form } from "@/components/ui/form";
import { useProfileForm } from "./profile-Form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import test from "../../../../../../public/doctor-hero.png";

export function ProfileContent() {
  const form = useProfileForm();

  return (
    <div className="mx-auto">
      <Form {...form}>
        <form>
          <Card>
            <CardHeader></CardHeader>
            <CardTitle>Meu Perfil</CardTitle>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div>
                  <Image
                    src={test}
                    alt="Image da clinica"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}
