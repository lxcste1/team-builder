"use client";

import * as React from "react";
import { authService } from "@/services/authService";

const SIGNUP_ERRORS: Record<string, string> = {
  "auth/email-already-in-use": "Este email ya está registrado.",
  "auth/invalid-email": "Email inválido.",
  "auth/weak-password":
    "La contraseña es demasiado débil (mínimo 6 caracteres).",
};

function mapSignUpError(code?: string) {
  return SIGNUP_ERRORS[code || ""] ?? "Ocurrió un error al registrarte.";
}

type Params = { onSuccess: () => void };

export const useSignUp = ({ onSuccess }: Params) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage(null);
    setIsSubmitting(true);
    try {
      const fd = new FormData(e.currentTarget);
      const name = String(fd.get("name") ?? "").trim();
      const email = String(fd.get("email") ?? "").trim();
      const password = String(fd.get("password") ?? "");

      await authService.signUpWithEmail(email, password, name);
      onSuccess();
    } catch (err: any) {
      setMessage(mapSignUpError(err?.code));
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, message, onSubmit };
};
