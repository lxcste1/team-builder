"use client"; // Asegúrate de que este componente se ejecute en el cliente

import React, { useState } from 'react';
import { Player, Position } from '@/types';
import { Text } from '@radix-ui/themes';
import BuilderAddPlayer from './subcomponents/BuilderAddPlayer';
import BuilderForm from './subcomponents/BuilderForm';

interface BuilderProps {
  players: Player[];
  onCreate: (teams: { team1?: Player[]; team2?: Player[] }) => void;
}

const Builder: React.FC<BuilderProps> = ({ players: initialPlayers, onCreate }) => {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  const handleAddPlayer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const score = formData.get('score');
    const parsedScore = score ? Number(score) : 0;

    const player = {
      name: formData.get("player") as string,
      position: formData.get("position") as Position,
      score: parsedScore
    };

    setPlayers(players => [...players, player]);
    event.currentTarget.reset();
  };

  return (
    <section className='max-w-md'>
      <div className='flex justify-center w-full'>
        <Text className='text-center'>
          Agregar 16 jugadores
        </Text>
      </div>
      <BuilderAddPlayer addPlayer={handleAddPlayer} />
      {players.length > 0 && <BuilderForm onCreate={onCreate} players={players} />}
    </section>
  );
};

export default Builder;