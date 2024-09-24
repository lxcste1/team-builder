"use client"; 

import React, { useState } from 'react';
import { Player, Position } from '@/types';
import { Text, Button, TextArea } from '@radix-ui/themes';
import BuilderForm from './subcomponents/BuilderForm';

interface BuilderProps {
  players: Player[];
  onCreate: (teams: { team1?: Player[]; team2?: Player[] }) => void;
}

const Builder: React.FC<BuilderProps> = ({ onCreate }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [textareaValue, setTextareaValue] = useState<string>("");

  // Manejar el input del textarea para la lista de jugadores
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  // Procesar la lista de jugadores desde el textarea
  const handleProcessPlayers = () => {
    const playerNames = textareaValue.split('\n').map(line => line.trim()).filter(line => line !== "");
    const newPlayers = playerNames.map(name => ({
      name,
      position: "Default" as Position,
      score: 0,
    }));
    setPlayers(newPlayers);
  };

  const handleRemovePlayer = (playerName: string) => {
    setPlayers(players => players.filter(player => player.name !== playerName));
  };

  const handleUpdatePlayer = (index: number, updatedPlayer: Player) => {
    setPlayers(players => players.map((player, i) => i === index ? updatedPlayer : player));
  };

  return (
    <section className='min-w-96 max-w-md'>
      <div className='flex justify-center w-full'>
        <Text className='text-center'>
          Pegar lista de jugadores
        </Text>
      </div>
      <TextArea  
        value={textareaValue} 
        onChange={handleTextareaChange} 
        className="w-full p-2 border border-gray-300 rounded-md" 
        rows={10} 
        placeholder="Pegar lista de jugadores"
      />
      <div className="flex justify-center mt-4">
        <Button onClick={handleProcessPlayers} size="1">
          Procesar jugadores
        </Button>
      </div>
      {players.length > 0 && (
        <BuilderForm 
          onCreate={onCreate} 
          players={players} 
          onRemovePlayer={handleRemovePlayer} 
          onUpdatePlayer={handleUpdatePlayer} 
        />
      )}
    </section>
  );
};

export default Builder;