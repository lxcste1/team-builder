import { Player } from '@/types';

export const CreateTeams = (players: Player[]): { team1: Player[]; team2: Player[] } => {
    const positions = {
      ARQ: [] as Player[],
      DEF: [] as Player[],
      VOL: [] as Player[],
      DEL: [] as Player[],
    };
  
    players.forEach(player => {
      positions[player.position].push(player);
    });
  
    const team1: Player[] = [];
    const team2: Player[] = [];
  
    Object.values(positions).forEach(group => {
      group.sort((a, b) => b.score - a.score);
  
      group.forEach((player, index) => {
        if (index % 2 === 0) {
          team1.push(player);
        } else {
          team2.push(player);
        }
      });
    });
  
    console.log('Teams generated:', { team1, team2 }); // Debugging line
  
    return { team1, team2 };
  };

  export default CreateTeams;
