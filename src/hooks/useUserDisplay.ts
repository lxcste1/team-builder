"use client";

import * as React from "react";
import { useAuth } from "@/hooks/useAuth";
import {
  onUserProfile,
  ensureUserDoc,
  UserProfile,
} from "@/services/userProfile";

export function useUserDisplay() {
  const { user, loading } = useAuth();
  const [profile, setProfile] = React.useState<UserProfile | null>(null);

  React.useEffect(() => {
    if (!user) {
      setProfile(null);
      return;
    }
    // asegurar doc al primer login
    ensureUserDoc(user).catch(() => {});
    // suscripción al perfil
    return onUserProfile(user.uid, setProfile);
  }, [user]);

  // merge de nombres/fotos (DB > Auth > providerData > fallback)
  const mergedName =
    profile?.displayName ??
    user?.displayName ??
    user?.providerData?.[0]?.displayName ??
    "Usuario";

  const mergedEmail = profile?.email ?? user?.email ?? "";
  const mergedPhoto =
    profile?.photoURL ??
    user?.photoURL ??
    user?.providerData?.[0]?.photoURL ??
    "";

  return {
    loading: loading && !user, // opcional
    user,
    profile,
    name: mergedName,
    email: mergedEmail,
    photo: mergedPhoto,
    isLoggedIn: !!user,
  };
}
