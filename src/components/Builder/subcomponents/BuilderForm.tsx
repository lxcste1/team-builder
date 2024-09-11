"use client";

import { useState } from 'react';
import { Player } from '@/types';
import { Table, Button } from '@radix-ui/themes';
import CreateTeams from './CreateTeams';
import Teams from './Teams';

interface BuilderFormProps {
  onCreate: (teams: { team1?: Player[]; team2?: Player[] }) => void;
  players: Player[];
}

const BuilderForm: React.FC<BuilderFormProps> = ({ onCreate, players }) => {
  const [teams, setTeams] = useState<{ team1: Player[]; team2: Player[] } | null>(null);
  const isDisabled = players.length < 16;

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
              <Table.ColumnHeaderCell className="text-right">POS</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-right">PTS</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {players?.map(({ name, position, score }, i) => (
              <Table.Row key={`${i}-${name}`}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell className="text-right">{position}</Table.Cell>
                <Table.Cell className="text-right">{score}</Table.Cell>
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