"use client"
import React, { useState } from 'react';

import { Player } from '@/types';

import { Text } from '@radix-ui/themes';
import BuilderAddPlayer from './subcomponents/BuilderAddPlayer';
import BuilderForm from './subcomponents/BuilderForm';

export default function Builder({
    players: initialPlayers,
    onCreate
}: {
    players: Player[];
    onCreate?: (formData: FormData) => void;
}) {

  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  function handleAddPlayer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const player = {
      name: formData.get("player") as string,
      position: formData.get("position") as string,
      score: formData.get("score") as string
    }

    setPlayers((players) =>
      players.concat(player)
    );

    event.currentTarget.reset();
  }

  return (
    <section className='max-w-md'>
      <div className='flex justify-center w-full'>
        <Text className='text-center'>
          Agregar los 16 jugadores
        </Text>
      </div>
      <BuilderAddPlayer addPlayer={handleAddPlayer} />
      <BuilderForm onCreate={onCreate} players={players} />
    </section>
  )
}
