import React from "react";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  canGoBack: boolean;
  onBack: () => void;
}

export const BackButton = ({ canGoBack, onBack }: BackButtonProps) =>
  canGoBack ? (
    <Button
      variant="secondary"
      onClick={onBack}
      className="w-full"
      aria-label="Volver al paso anterior"
    >
      ← Volver
    </Button>
  ) : null;
