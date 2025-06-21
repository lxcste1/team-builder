import React from "react";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { Teams } from "@/types";
import { TeamColumn } from "./TeamColumn";

interface ReviewTeamStepProps {
  teams: Teams;
  calculateTotalScore: (team: Teams["team1"]) => number;
  onReset: () => void;
}

export const ReviewTeamStep = ({
  teams,
  calculateTotalScore,
  onReset,
}: ReviewTeamStepProps) => (
  <>
    <div className="flex items-center gap-2 text-xl font-bold">
      <Trophy className="w-6 h-6" />
      <h2>Equipos Armados</h2>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <TeamColumn
        title="Local"
        players={teams.team1}
        calculateTotal={calculateTotalScore}
      />
      <TeamColumn
        title="Visitante"
        players={teams.team2}
        isReversed
        calculateTotal={calculateTotalScore}
      />
    </div>
    <Button
      onClick={onReset}
      className="w-full bg-[#333] hover:bg-[#444]"
      aria-label="Crear nuevos equipos"
    >
      Crear Nuevos Equipos
    </Button>
  </>
);
