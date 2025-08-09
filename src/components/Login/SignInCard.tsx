"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { useSignIn } from "@/hooks/useSignIn";

export const SignInCard = () => {
  const router = useRouter();

  const formRef = React.useRef<HTMLFormElement>(null);

  const { isSubmitting, message, onSubmit, onGoogle, onReset } = useSignIn({
    onSuccess: () => router.push("/"),
  });

  const handleResetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const email = formRef.current
      ? String(new FormData(formRef.current).get("email") ?? "")
      : "";
    onReset(email);
  };

  return (
    <Card className="bg-[#0f0f0f] border-[#333]">
      <CardContent className="pt-6">
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="space-y-6"
          aria-label="Formulario de inicio de sesión"
        >
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              {"Email"}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tu@email.com"
              className="bg-[#0f0f0f] border-[#333] text-white placeholder:text-gray-500 focus-visible:ring-gray-300"
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">
              {"Contraseña"}
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="bg-[#0f0f0f] border-[#333] text-white placeholder:text-gray-500 focus-visible:ring-gray-300"
              disabled={isSubmitting}
            />
          </div>

          {message ? <p className="text-sm text-red-400">{message}</p> : null}

          <div className="flex items-center justify-center text-sm">
            <Button
              type="button"
              variant={"link"}
              onClick={handleResetClick}
              className="text-gray-400 hover:text-white underline underline-offset-4"
              disabled={isSubmitting}
            >
              {"¿Olvidaste tu contraseña?"}
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200 rounded-full font-semibold py-6 text-lg transition-all duration-300 hover:scale-[1.02]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Ingresando..." : "Ingresar"}
          </Button>
        </form>
        <div className="flex items-center gap-4 w-full py-2">
          <hr className="border border-[#333] w-full" />
          <span className="text-gray-400">{"O"}</span>
          <hr className="border rounded-md border-[#333] w-full" />
        </div>
        <Button
          type="button"
          className="w-full bg-[#333] hover:bg-gray-600 rounded-full font-semibold py-6 text-lg transition-all duration-300 hover:scale-[1.02]"
          onClick={onGoogle}
          disabled={isSubmitting}
          aria-label="Continuar con Google"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            ></path>
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            ></path>
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            ></path>
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            ></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </svg>
          {isSubmitting ? "Abriendo Google..." : "Continuar con Google"}
        </Button>

        <div className="mt-8 text-center text-sm text-gray-400">
          {"¿No tenés cuenta? "}
          <Link href="/team-builder" className="underline hover:text-white">
            {"Probar sin registrarse"}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
