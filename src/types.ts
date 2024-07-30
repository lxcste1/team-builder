export type Player = {
    name: string;
    position: string;
    score: string;    
}

export interface BuilderProps {
    players?: Player[];
}