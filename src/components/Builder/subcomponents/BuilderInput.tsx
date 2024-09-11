import React from 'react';
import { TextField } from '@radix-ui/themes';
import { Text } from '@radix-ui/themes';

export interface BuilderInputProps {
    name: string;
    placeholder: string;
    text: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

export default function BuilderInput({
    name,
    placeholder,
    text,
    value,
    onChange,
    error
}: BuilderInputProps) {
  return (
    <div className='flex flex-col gap-1 w-full'>
      <TextField.Root 
        name={name} 
        placeholder={placeholder} 
        size={"1"} 
        className='w-full' 
        value={value}
        onChange={onChange}
      />
      <Text className='text-xs'>{text}</Text>
      {error && (
        <Text className={`${error ? 'visible' : 'hidden'} text-xs text-red-500`}>
          {error}
        </Text>
      )}
    </div>
  );
}