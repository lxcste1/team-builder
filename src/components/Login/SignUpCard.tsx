"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSignUp } from "@/hooks/useSignUp";

export const SignUpCard = () => {
  const router = useRouter();
  const { isSubmitting, message, onSubmit } = useSignUp({
    onSuccess: () => router.push("/"),
  });

  return (
    <Card className="bg-[#0f0f0f] border-[#333]">
      <CardContent className="pt-6">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">
              Nombre
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              required
              className="bg-[#0f0f0f] border-[#333] text-white placeholder:text-gray-500 focus-visible:ring-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tu@email.com"
              className="bg-[#0f0f0f] border-[#333] text-white placeholder:text-gray-500 focus-visible:ring-gray-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">
              Contraseña
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="bg-[#0f0f0f] border-[#333] text-white placeholder:text-gray-500 focus-visible:ring-gray-300"
            />
          </div>

          {message && <p className="text-sm text-red-400">{message}</p>}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#333] hover:bg-[#444]"
          >
            {isSubmitting ? "Creando cuenta..." : "Registrarme"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
