import { useState } from "react";
import { Player, Position, Teams } from "@/types";

export const useTeamBuilder = () => {
  const [step, setStep] = useState(1);
  const [playerList, setPlayerList] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Teams>({ team1: [], team2: [] });

  const processPlayers = () => {
    const newPlayers: Player[] = playerList
      .split("\n")
      .map((name) => name.trim())
      .filter(Boolean)
      .map((name) => ({ name, position: "POS" as Position, score: 3 }));
    setPlayers(newPlayers);
    setStep(2);
  };

  const updatePlayer = (
    index: number,
    field: "position" | "score",
    value: string
  ) => {
    setPlayers((prev) => {
      const copy = [...prev];
      copy[index] = {
        ...copy[index],
        [field]: field === "score" ? Number(value) : (value as Position),
      };
      return copy;
    });
  };

  const removePlayer = (index: number) => {
    setPlayers((prev) => prev.filter((_, i) => i !== index));
  };

  const createTeams = () => {
    const sorted = [...players].sort((a, b) => b.score - a.score);
    const team1: Player[] = [];
    const team2: Player[] = [];

    sorted.forEach((p, i) => (i % 2 === 0 ? team1 : team2).push(p));

    setTeams({ team1, team2 });
    setStep(3);
  };

  const calculateTotalScore = (team: Player[]) =>
    team.reduce((sum, p) => sum + p.score, 0);

  const reset = () => {
    setStep(1);
    setPlayerList("");
    setPlayers([]);
    setTeams({ team1: [], team2: [] });
  };

  const back = () => setStep((s) => Math.max(s - 1, 1));

  return {
    step,
    playerList,
    setPlayerList,
    players,
    teams,
    processPlayers,
    updatePlayer,
    removePlayer,
    createTeams,
    calculateTotalScore,
    reset,
    back,
  };
};
