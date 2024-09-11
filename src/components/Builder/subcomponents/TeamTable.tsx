import { Player } from "@/types"
import { Table } from "@radix-ui/themes"

interface TeamTableProps {
    team: Player[],
    title: string,
    alignment: 'left' | 'right'
  }

export const TeamTable: React.FC<TeamTableProps> = ({ team, title, alignment }) => {

    const calculateTotalScore = (team: Player[]): number => {
      return team.reduce((total, player) => total + player.score, 0);
    };
  
    return (
      <div className='w-1/2'>
        <h2 className='text-center'>{title}</h2>
        <Table.Root className="w-full" size={"1"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className={`text-${alignment}`}>Nombre</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {team.map(({ name }, i) => (
              <Table.Row key={`${i}-${name}`}>
                <Table.Cell className={`text-${alignment}`}>{name}</Table.Cell>
              </Table.Row>
            ))}
            <Table.Row>
              <Table.Cell>
                <p className={`text-${alignment}`}>Total de puntos: {calculateTotalScore(team)}</p>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    );
  };

export default TeamTable;