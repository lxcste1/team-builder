import { Player } from "@/types";

interface TeamColumnProps {
  title: string;
  players: Player[];
  isReversed?: boolean;
  calculateTotal: (team: Player[]) => number;
}

export const TeamColumn = ({
  title,
  players,
  isReversed,
  calculateTotal,
}: TeamColumnProps) => (
  <div className="space-y-2">
    <h3 className="text-center font-bold py-1 rounded-md">{title}</h3>
    {players.map((p, i) => (
      <div key={i} className="bg-[#1a1a1a] p-2 rounded-md text-sm">
        <div className={`font-medium ${isReversed ? "text-right" : ""}`}>
          {p.name}
        </div>
      </div>
    ))}
    <div className="text-center font-medium">
      Total: {calculateTotal(players)} pts
    </div>
  </div>
);
