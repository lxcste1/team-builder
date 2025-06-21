import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Trash2, Trophy, Users } from "lucide-react";
import { Player } from "@/types";

interface ConfigurePlayerStepProps {
  players: Player[];
  updatePlayer: (
    index: number,
    field: "position" | "score",
    value: string
  ) => void;
  removePlayer: (index: number) => void;
  onCreateTeams: () => void;
}

export const ConfigurePlayerStep = ({
  players,
  updatePlayer,
  removePlayer,
  onCreateTeams,
}: ConfigurePlayerStepProps) => (
  <>
    <div className="flex items-center gap-2 text-xl font-bold">
      <Users className="w-6 h-6" />
      <h2>Configurar Jugadores</h2>
    </div>
    <div className="space-y-3">
      {players.map((p, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-2 bg-[#1a1a1a] p-2 rounded-md"
        >
          <span className="flex-1 font-medium truncate">{p.name}</span>
          <div className="flex gap-2">
            <Select
              value={p.position}
              onValueChange={(v) => updatePlayer(i, "position", v)}
            >
              <SelectTrigger className="w-[70px] text-xs rounded-md">
                <SelectValue placeholder="POS" />
              </SelectTrigger>
              <SelectContent>
                {["DEL", "VOL", "DEF", "ARQ", "POS"].map((pos) => (
                  <SelectItem key={pos} value={pos}>
                    {pos}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={p.score.toString()}
              onValueChange={(v) => updatePlayer(i, "score", v)}
            >
              <SelectTrigger className="w-[50px] text-xs rounded-md">
                <SelectValue placeholder="PTS" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((n) => (
                  <SelectItem key={n} value={n.toString()}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" onClick={() => removePlayer(i)}>
              <Trash2 className="h-4 w-4 text-red-500 hover:text-red-700" />
            </Button>
          </div>
        </div>
      ))}
    </div>
    <Button
      onClick={onCreateTeams}
      className="w-full bg-[#333] hover:bg-[#444]"
      disabled={players.length < 2}
      aria-label="Armar equipos"
    >
      <Trophy className="mr-2 h-4 w-4" />
      Armar Equipos
    </Button>
  </>
);
