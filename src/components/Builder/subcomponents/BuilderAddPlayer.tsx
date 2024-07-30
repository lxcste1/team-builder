"use client"
import React, { ReactEventHandler, useState } from 'react';

import { Text, TextField } from '@radix-ui/themes';
import { Button } from '@radix-ui/themes';
import BuilderInput from './BuilderInput';

export interface BuilderAddPlayerProps {
    addPlayer: ReactEventHandler
}

const builderInputs = [
    {
        id: 0,
        name: "player",
        placeholder: "Nombre del jugador",
        text: "Nombre del jugador"
    },
    {
        id: 1,
        name: "position",
        placeholder: "Posición",
        text: "Posición (DEL, VOL, DEF, ARQ)"
    },
    {
        id: 2,
        name: "score",
        placeholder: "Puntuación",
        text: "Puntuación (Del 1 al 5)"
    },
]

export default function BuilderAddPlayer({addPlayer}: BuilderAddPlayerProps) {
  return (
    <form className="m-auto flex flex-wrap items-center justify-center gap-4 py-4 w-full" onSubmit={addPlayer}>
        {builderInputs.map(({name, placeholder, text, id}) => (
            <BuilderInput key={id} name={name} placeholder={placeholder} text={text} />
        ))}
        <div className="flex justify-center w-full my-4">
        <Button className="w-screen" type="submit" variant="solid" size={"1"}>
            Agregar jugador
        </Button>        
        </div>
    </form>
  )
}
