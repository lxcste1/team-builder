"use client";
import React, { useState, ReactEventHandler } from 'react';
import { Button } from '@radix-ui/themes';
import BuilderInput from './BuilderInput';
import { builderInputs } from '@/components/utils/utils';

export interface BuilderAddPlayerProps {
    addPlayer: ReactEventHandler;
}

export default function BuilderAddPlayer({ addPlayer }: BuilderAddPlayerProps) {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let newErrors: { [key: string]: string } = {};
        builderInputs.forEach(({ name }) => {
            if (!formData[name] || formData[name].trim() === '') {
                newErrors[name] = 'Este campo es obligatorio';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            addPlayer(e);
        }
    };

    return (
        <form className="m-auto flex flex-wrap items-center justify-center gap-4 py-4 w-full" onSubmit={handleSubmit}>
            {builderInputs.map(({ name, placeholder, text, id }) => (
                <BuilderInput
                    key={id}
                    name={name}
                    placeholder={placeholder}
                    text={text}
                    value={formData[name] || ''}
                    onChange={handleInputChange}
                    error={errors[name]}
                />
            ))}
            <div className="flex justify-center w-full">
                <Button
                    className="w-screen"
                    type="submit"
                    variant="solid"
                    size={"1"}
                >
                    Agregar jugador
                </Button>
            </div>
        </form>
    );
}