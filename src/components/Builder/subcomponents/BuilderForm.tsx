"use client";

import { useState } from 'react';
import { Player, Position } from '@/types';
import { Table, Button, Select } from '@radix-ui/themes';
import CreateTeams from './CreateTeams';
import Teams from './Teams';

interface BuilderFormProps {
  onCreate: (teams: { team1?: Player[]; team2?: Player[] }) => void;
  players: Player[];
  onRemovePlayer: (playerName: string) => void;
  onUpdatePlayer: (index: number, updatedPlayer: Player) => void;
}

const BuilderForm: React.FC<BuilderFormProps> = ({ onCreate, players, onRemovePlayer, onUpdatePlayer }) => {
  const [teams, setTeams] = useState<{ team1: Player[]; team2: Player[] } | null>(null);
  const isDisabled = players.length < 16;

  const handlePositionChange = (index: number, position: Position) => {
    const updatedPlayer = { ...players[index], position };
    onUpdatePlayer(index, updatedPlayer);
  };

  const handleScoreChange = (index: number, score: number) => {
    const updatedPlayer = { ...players[index], score };
    onUpdatePlayer(index, updatedPlayer);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const teams = CreateTeams(players);
    setTeams(teams);
  
    if (onCreate) onCreate(teams);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center items-center pb-4">
        <Table.Root className="w-full" size={"1"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width={'60px'} className="text-center">POS</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width={'60px'} className="text-center">PTS</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-right">Eliminar</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {players?.map(({ name, position, score }, i) => (
              <Table.Row key={`${i}-${name}`} align={'center'}>
                <Table.Cell>{name}</Table.Cell>
                {/* Select para la posición */}
                <Table.Cell width={'60px'} className="text-right">
                  <Select.Root size={'1'} value={position} onValueChange={(value) => handlePositionChange(i, value as Position)}>
                    <Select.Trigger>
                      <Button size="1" variant='ghost' className='capitalize'>{position === "Default" ? "POS" : position}</Button>
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Item value="ARQ">ARQ</Select.Item>
                      <Select.Item value="DEF">DEF</Select.Item>
                      <Select.Item value="VOL">VOL</Select.Item>
                      <Select.Item value="DEL">DEL</Select.Item>
                    </Select.Content>
                  </Select.Root>
                </Table.Cell>
                <Table.Cell className="text-right">
                  <Select.Root size={'1'} value={String(score) || "PTS"} onValueChange={(value) => handleScoreChange(i, Number(value))}>
                    <Select.Trigger>
                      <Button variant='ghost' size="1">{score === 0 ? "PTS" : score}</Button>
                    </Select.Trigger>
                    <Select.Content>
                      {[1, 2, 3, 4, 5].map(value => (
                        <Select.Item key={value} value={String(value)}>{value}</Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </Table.Cell>
                <Table.Cell className="text-right">
                  <Button
                    size="1"
                    variant="ghost"
                    color='crimson'
                    onClick={() => onRemovePlayer(name)} // Llamamos a la función para eliminar
                  >
                    Eliminar
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        <div className="flex justify-center w-full my-4">
          <Button type="submit" size={"1"} disabled={isDisabled}>
            Armar equipos
          </Button>
        </div>
      </form>
      {teams && <Teams team1={teams.team1} team2={teams.team2} />}
    </>
  );
};

export default BuilderForm;