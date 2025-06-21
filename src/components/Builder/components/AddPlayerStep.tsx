import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Users } from "lucide-react";

interface AddPlayerStepProps {
  playerList: string;
  setPlayerList: React.Dispatch<React.SetStateAction<string>>;
  onProcess: () => void;
}

export const AddPlayerStep = ({
  playerList,
  setPlayerList,
  onProcess,
}: AddPlayerStepProps) => (
  <>
    <div className="flex items-center gap-2 text-xl font-bold">
      <Users className="w-6 h-6" />
      <h2>Agregar Jugadores</h2>
    </div>
    <Textarea
      placeholder="Ingresa un jugador por línea..."
      value={playerList}
      onChange={(e) => setPlayerList(e.target.value)}
      className="min-h-[200px] bg-[#010101] text-[#f2f2f2] border-[#333]"
      name="Agregar jugadores"
    />
    <Button
      onClick={onProcess}
      className="w-full bg-[#333] hover:bg-[#444]"
      disabled={!playerList.trim()}
      aria-label="Procesar jugadores"
    >
      <Users className="mr-2 h-4 w-4" />
      Procesar Jugadores
    </Button>
  </>
);
