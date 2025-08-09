"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeaderButtons } from "./components/HeaderButtons";

export const Header = () => {
  return (
    <header className="fixed w-full bg-[#0d0d0d] border-b border-[#333] text-slate-100 px-8 py-4 z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/">
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            <Image
              src={"/assets/team-builder_logo-white.webp"}
              alt="Logo de Team Builder"
              width={"28"}
              height={"20"}
              className="w-[28px] h-[20px]"
            />
            Team Builder
          </h1>
        </Link>
        <HeaderButtons />
      </div>
    </header>
  );
};
