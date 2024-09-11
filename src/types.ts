export type Position = 'ARQ' | 'DEF' | 'VOL' | 'DEL';

export type Player = {
    name: string;
    position: Position;
    score: number;    
}

export interface BuilderProps {
    players?: Player[];
}