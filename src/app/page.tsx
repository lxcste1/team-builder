"use client"

import Builder from "@/components/Builder/Builder";
import { Player } from "@/types";

export default function Home() {

  const players: Player[] = [];

  const handleCreateTeams = (teams: { team1?: Player[]; team2?: Player[] }) => {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-8">
      <Builder players={players} onCreate={handleCreateTeams} />
    </main>
  );
}
