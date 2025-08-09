"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import { authService } from "@/services/authService";
import { getInitials } from "@/components/utils/helpers";

type Props = {
  trigger: React.ReactNode;
  name: string;
  email: string;
  photo?: string;
};

export const UserMenuDrawer = ({ trigger, name, email, photo }: Props) => {
  const router = useRouter();

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>

      <DrawerContent className="border-zinc-800 bg-[#0f0f0f] text-zinc-100 w-[300px]">
        <div className="flex flex-col justify-between mx-auto w-full max-w-md p-4">
          <div>
            <DrawerHeader className="text-left">
              <DrawerTitle className="truncate flex items-center gap-2">
                {photo ? (
                  <Image
                    alt={name}
                    src={photo}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="flex items-center justify-center h-9 w-9 size-9 bg-zinc-800 rounded-full text-sm text-zinc-100 font-normal">
                    {getInitials(name)}
                  </span>
                )}
                <span className="text-zinc-400">{name}</span>
              </DrawerTitle>
              <DrawerDescription className="truncate text-zinc-400">
                {email}
              </DrawerDescription>
            </DrawerHeader>

            {/*             <div className="mt-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-inherit hover:text-inherit"
                onClick={() => router.push("/profile")}
              >
                Perfil
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-inherit hover:text-inherit"
                onClick={() => router.push("/team-builder")}
              >
                Mi Team Builder
              </Button>
            </div> */}
          </div>

          <DrawerFooter className="mt-6">
            <Button
              variant="destructive"
              className="w-full"
              onClick={async () => {
                await authService.logOut();
                router.push("/");
              }}
            >
              Cerrar sesión
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
