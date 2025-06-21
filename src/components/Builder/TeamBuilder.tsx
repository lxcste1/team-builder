"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Stepper } from "./components/Stepper";
import { AddPlayerStep } from "./components/AddPlayerStep";
import { ConfigurePlayerStep } from "./components/ConfigurePlayerStep";
import { ReviewTeamStep } from "./components/ReviewTeamStep";
import { useTeamBuilder } from "@/hooks/useTeamBuilder";
import { BackButton } from "./components/BackButton";

export default function TeamBuilder() {
  const {
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
  } = useTeamBuilder();

  return (
    <div className="min-h-screen bg-[#010101] p-4 text-slate-100">
      <div className="max-w-md mx-auto mt-[75px]">
        <Stepper currentStep={step} />
        <Card className="bg-[#0d0d0d] border-[#333] rounded-md text-slate-100">
          <CardContent className="p-6 space-y-4">
            {step === 1 && (
              <AddPlayerStep
                playerList={playerList}
                setPlayerList={setPlayerList}
                onProcess={processPlayers}
              />
            )}
            {step === 2 && (
              <ConfigurePlayerStep
                players={players}
                updatePlayer={updatePlayer}
                removePlayer={removePlayer}
                onCreateTeams={createTeams}
              />
            )}
            {step === 3 && (
              <ReviewTeamStep
                teams={teams}
                calculateTotalScore={calculateTotalScore}
                onReset={reset}
              />
            )}
            <div className="w'full mt-8">
              <BackButton canGoBack={step > 1} onBack={back} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
