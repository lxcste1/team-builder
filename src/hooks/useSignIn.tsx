"use client";

import * as React from "react";
import { authService } from "@/services/authService";

const AUTH_ERROR_MESSAGES: Record<string, string> = {
  "auth/invalid-credential": "Email o contraseña incorrectos.",
  "auth/wrong-password": "Email o contraseña incorrectos.",
  "auth/user-not-found": "No existe un usuario con ese email.",
  "auth/too-many-requests": "Demasiados intentos. Probá más tarde.",
  "auth/popup-closed-by-user": "Se cerró la ventana de Google.",
  "auth/account-exists-with-different-credential":
    "Ya existe una cuenta con otro método de acceso.",
};

export function mapAuthError(code?: string) {
  return (
    AUTH_ERROR_MESSAGES[code || ""] ?? "Ocurrió un error. Intentalo de nuevo."
  );
}

type UseSignInParams = {
  onSuccess: () => void;
};

export const useSignIn = ({ onSuccess }: UseSignInParams) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage(null);
    setIsSubmitting(true);
    try {
      const fd = new FormData(e.currentTarget);
      const email = String(fd.get("email") ?? "").trim();
      const password = String(fd.get("password") ?? "");
      await authService.signInWithEmail(email, password);
      onSuccess();
    } catch (err: any) {
      setMessage(mapAuthError(err?.code));
    } finally {
      setIsSubmitting(false);
    }
  };

  const onGoogle = async () => {
    setMessage(null);
    setIsSubmitting(true);
    try {
      await authService.signInWithGoogle();
      onSuccess();
    } catch (err: any) {
      setMessage(mapAuthError(err?.code));
    } finally {
      setIsSubmitting(false);
    }
  };

  const onReset = async (email: string) => {
    if (!email) {
      setMessage("Ingresá tu email para enviarte el enlace de recuperación.");
      return;
    }
    setMessage(null);
    try {
      await authService.resetPassword(email.trim());
      setMessage("Te enviamos un enlace para restablecer la contraseña.");
    } catch (err: any) {
      setMessage(mapAuthError(err?.code));
    }
  };

  return { isSubmitting, message, onSubmit, onGoogle, onReset };
};
