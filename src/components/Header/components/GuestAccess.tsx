"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Image from "next/image";

export const GuestAccess = () => {
  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="m-1 rounded-full h-9 w-9"
            aria-label="Abrir opciones de acceso"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </DrawerTrigger>

        <DrawerContent className="border-zinc-800 bg-[#0f0f0f] text-zinc-100 w-[280px]">
          <DrawerHeader className="text-center">
            <DrawerTitle className="truncate flex items-center justify-center gap-2 text-zinc-100">
              <Image
                src={"/assets/team-builder_logo-white.webp"}
                alt="Logo de Team Builder"
                width={"28"}
                height={"20"}
                className="w-[28px] h-[20px]"
              />
              <span>{"Team Builder"}</span>
            </DrawerTitle>
          </DrawerHeader>
          <div className="mx-auto w-full max-w-sm p-4 space-y-3">
            <Button asChild className="w-full">
              <Link href="/login">Iniciar sesión</Link>
            </Button>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
