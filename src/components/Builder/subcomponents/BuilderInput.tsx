import React from 'react'
import { TextField } from '@radix-ui/themes'
import { Text } from '@radix-ui/themes'

export interface BuilderInputProps {
    name: string,
    placeholder: string,
    text: string
}

export default function BuilderInput({name, placeholder, text}: BuilderInputProps) {
  return (
    <div className='flex flex-col gap-1 w-full'>
            <TextField.Root name={name} placeholder={placeholder} size={"1"} className='w-full' />
            <Text className='text-xs'>{text}</Text>        
        </div>
  )
}
