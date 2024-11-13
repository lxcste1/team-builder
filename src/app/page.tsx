"use client"

import TeamBuilder from "@/components/Builder/TeamBuilder";
import { Player } from "@/types";

export default function Home() {

  const players: Player[] = [];

  const handleCreateTeams = (teams: { team1?: Player[]; team2?: Player[] }) => {};

  return (
    <main>
      {/* <Builder players={players} onCreate={handleCreateTeams} /> */}
      <TeamBuilder />
    </main>
  );
}
