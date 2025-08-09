"use client";

import * as React from "react";
import Image from "next/image";
import { getInitials } from "@/components/utils/helpers";
import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"button"> & {
  name: string;
  photo?: string;
  loading?: boolean;
};

export const UserAvatarButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ name, photo, loading, className, ...props }, ref) => {
    if (loading)
      return (
        <div className="size-9 m-1 rounded-full bg-zinc-800 animate-pulse" />
      );
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center gap-2 rounded-full p-1 hover:bg-zinc-800/60",
          className
        )}
        {...props}
      >
        <div className="h-9 w-9 overflow-hidden rounded-full bg-zinc-800 text-white grid place-items-center">
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
            <span className="text-sm">{getInitials(name)}</span>
          )}
        </div>
      </button>
    );
  }
);
UserAvatarButton.displayName = "UserAvatarButton";
