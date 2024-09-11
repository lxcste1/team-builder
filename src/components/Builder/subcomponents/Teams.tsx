import { Player } from '@/types'
import React from 'react'
import TeamTable from './TeamTable'

export interface TeamsProps {
    team1: Player[],
    team2: Player[]
}

export const Teams = ({team1, team2}: TeamsProps) => {
  return (
    <div className='flex'>
        <TeamTable team={team1} title="City titular" alignment="left" />
        <TeamTable team={team2} title="City suplente" alignment="right" />
    </div>
  )
}

export default Teams