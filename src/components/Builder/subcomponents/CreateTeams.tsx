import { Player } from '@/types';

export const CreateTeams = (players: Player[]): { team1: Player[]; team2: Player[] } => {
  const team1: Player[] = [];
  const team2: Player[] = [];
  
  const positions = {
    ARQ: [] as Player[],
    DEF: [] as Player[],
    VOL: [] as Player[],
    DEL: [] as Player[],
    Default: [] as Player[],
  };

  players.forEach(player => {
    positions[player.position].push(player);
  });

  const distributePlayers = (players: Player[]) => {
    players.forEach((player, index) => {
      if (team1.length <= team2.length) {
        team1.push(player);
      } else {
        team2.push(player);
      }
    });
  };

  Object.values(positions).forEach(group => {
    group.sort((a, b) => b.score - a.score);
    distributePlayers(group);
  });

  while (team1.length < 8 || team2.length < 8) {
    if (team1.length < 8) { team1.push({ name: "Jugador Ficticio", position: "DEL", score: 0 }); } 
    else if (team2.length < 8) { team2.push({ name: "Jugador Ficticio", position: "DEL", score: 0 }); }
  }

  return { team1, team2 };

  };

  export default CreateTeams;
