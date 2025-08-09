"use client";

import { useAuth } from "@/hooks/useAuth";
import { GuestAccess } from "./GuestAccess";
import { UserMenuDrawer } from "./UserMenuDrawer";
import { UserAvatarButton } from "./UserAvatarButton";
import { useUserDisplay } from "@/hooks/useUserDisplay";

export const HeaderButtons = () => {
  const { user, loading } = useAuth();
  const { name, email, photo } = useUserDisplay();

  if (loading)
    return (
      <div className="size-9 m-1 rounded-full bg-zinc-800 animate-pulse" />
    );

  if (!user) return <GuestAccess />;

  return (
    <UserMenuDrawer
      trigger={<UserAvatarButton name={name} photo={photo} loading={loading} />}
      name={name}
      email={email}
      photo={photo}
    />
  );
};
