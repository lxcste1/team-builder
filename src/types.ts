export type Position = "ARQ" | "DEF" | "VOL" | "DEL" | "Default";

export type Player = {
  name: string;
  position: Position;
  score: number;
};

export interface Teams {
  team1: Player[];
  team2: Player[];
}

export interface BuilderProps {
  players?: Player[];
}
