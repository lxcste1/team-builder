import { Player } from '@/types'
import React from 'react'

import { Table } from '@radix-ui/themes';
import { Button } from '@radix-ui/themes';

export interface BuilderFormProps {
    onCreate?: (formData: FormData) => void;
    players: Player[];
}

export default function BuilderForm({onCreate, players}: BuilderFormProps) {
  return (
    <form action={onCreate} className="flex flex-wrap justify-center items-center">
    <Table.Root className="w-full" size={"1"}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="text-right">POS</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="text-right">PTS</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {players?.map(({name, position, score}) => (
          <Table.Row key={name}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell className="text-right">{position}</Table.Cell>
            <Table.Cell className="text-right">{score}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    <div className="flex justify-center w-full my-4">
      <Button type="submit" size={"1"}>
        Armar equipos
      </Button>        
    </div>
  </form>
  )
}
