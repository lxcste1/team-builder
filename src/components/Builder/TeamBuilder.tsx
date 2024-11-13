'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Users, Trophy, UserPlus, Trash2 } from 'lucide-react'

import { Position } from '@/types'

interface Player {
  name: string
  position: string
  points: number
}

export default function TeamBuilder() {
  const [step, setStep] = useState(1)
  const [playerList, setPlayerList] = useState('');
  const [players, setPlayers] = useState<Player[]>([])
  const [teams, setTeams] = useState<{team1: Player[], team2: Player[]}>({ team1: [], team2: [] })

  const processPlayers = () => {
    const newPlayers = playerList.split('\n')
      .filter(name => name.trim())
      .map(name => ({ name: name.trim(), position: '', points: 3 }))
    setPlayers(newPlayers)
    setStep(2);
  }

  const updatePlayer = (index: number, field: 'position' | 'points', value: string) => {
    const newPlayers = [...players]
    newPlayers[index] = { ...newPlayers[index], [field]: field === 'points' ? Number(value) : value }
    setPlayers(newPlayers)
  }

  const removePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index))
  }

  const createTeams = () => {
    const sortedPlayers = [...players].sort((a, b) => b.points - a.points)
    const team1: Player[] = []
    const team2: Player[] = []
    
    sortedPlayers.forEach((player, index) => {
      if (index % 2 === 0) {
        team1.push(player)
      } else {
        team2.push(player)
      }
    })
    
    setTeams({ team1, team2 })
    setStep(3)
  }

  const calculateTotalScore = (team: Player[]): number => {
    return team.reduce((total, player) => total + player.points, 0);
  };

  return (
    <div className="min-h-screen bg-[#010101] p-4 text-[#f2f2f2]">
      <div className="max-w-md mx-auto space-y-4">
        {/* Title */}
        <div className='flex justify-center py-4'>
          <h1 className='text-2xl font-bold'>Team builder <span>&#9917;</span></h1>
        </div>
        {/* Stepper */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((number) => (
            <div
              key={number}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= number ? 'bg-[#f2f2f2] text-[#010101]' : 'bg-[#333] text-[#f2f2f2]'
              }`}
            >
              {number}
            </div>
          ))}
        </div>
        <Card className="bg-[#0d0d0d] border-[#333] rounded-md">
          <CardContent className="p-6 space-y-4">
            {step === 1 && (
              <>
                <div className="flex items-center gap-2 text-xl font-bold text-[#f2f2f2]">
                  <UserPlus className="w-6 h-6" />
                  <h2>Agregar Jugadores</h2>
                </div>
                <Textarea
                  placeholder="Ingresa un jugador por línea..."
                  value={playerList}
                  onChange={(e) => setPlayerList(e.target.value)}
                  className="min-h-[200px] bg-[#010101] text-[#f2f2f2] border-[#333]"
                />
                <Button 
                  onClick={processPlayers}
                  className="w-full bg-[#333] hover:bg-[#444] text-[#f2f2f2]"
                  disabled={!playerList.trim()}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Procesar Jugadores
                </Button>
              </>
            )}

            {step === 2 && (
              <>
                <div className="flex items-center gap-2 text-xl font-bold text-[#f2f2f2]">
                  <Users className="w-6 h-6" />
                  <h2>Configurar Jugadores</h2>
                </div>
                <div className="space-y-3">
                  {players.map((player, index) => (
                    <div key={index} className="flex items-center justify-between gap-2 bg-[#1a1a1a] p-2 rounded-md">
                      <span className="flex-1 font-medium text-sm text-[#f2f2f2] mx-1 max-w-20 truncate">{player.name}</span>
                      <div className='flex justify-end gap-2'>
                        <Select
                          value={player.position}
                          onValueChange={(value) => updatePlayer(index, 'position', value)}
                        >
                          <SelectTrigger className="w-[70px] bg-[#333] text-[#f2f2f2] border-[#444] text-xs rounded-md">
                            <SelectValue placeholder="POS" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#333] text-[#f2f2f2] border-[#444]">
                            <SelectItem value="DEL">DEL</SelectItem>
                            <SelectItem value="VOL">VOL</SelectItem>
                            <SelectItem value="DEF">DEF</SelectItem>
                            <SelectItem value="ARQ">ARQ</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select
                          value={player.points.toString()}
                          onValueChange={(value) => updatePlayer(index, 'points', value)}
                        >
                          <SelectTrigger className="w-[50px] bg-[#333] text-[#f2f2f2] border-[#444] rounded-md text-xs">
                            <SelectValue placeholder="PTS" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#333] text-[#f2f2f2] border-[#444] rounded-md">
                            {[1, 2, 3, 4, 5].map((n) => (
                              <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removePlayer(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>                        
                      </div>

                    </div>
                  ))}
                </div>
                <Button 
                  onClick={createTeams}
                  className="w-full bg-[#333] hover:bg-[#444] text-[#f2f2f2]"
                  disabled={players.length < 2}
                >
                  <Trophy className="mr-2 h-4 w-4" />
                  Armar Equipos
                </Button>
              </>
            )}

            {step === 3 && (
              <>
                <div className="flex items-center gap-2 text-xl font-bold text-[#f2f2f2]">
                  <Trophy className="w-6 h-6" />
                  <h2 className="text-[#f2f2f2]">Equipos Armados</h2>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Team 1 */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-center bg-[#1a1a1a] py-1 rounded-md text-[#f2f2f2]">City Titular</h3>
                    {teams.team1.map((player, index) => (
                      <div key={index} className="bg-[#1a1a1a] p-2 rounded-md text-sm">
                        <div className="font-medium text-[#f2f2f2]">{player.name}</div>
                      </div>
                    ))}
                    <div className="text-center text-sm font-medium text-[#f2f2f2]">
                    Total: {calculateTotalScore(teams.team1)} pts
                    </div>
                  </div>

                  {/* Team 2 */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-center bg-[#1a1a1a] py-1 rounded-md text-[#f2f2f2]">City Suplente</h3>
                    {teams.team2.map((player, index) => (
                      <div key={index} className="bg-[#1a1a1a] p-2 rounded-md text-sm">
                        <div className="font-medium text-[#f2f2f2] text-right">{player.name}</div>
                      </div>
                    ))}
                    <div className="text-center text-sm font-medium text-[#f2f2f2]">
                      Total: {calculateTotalScore(teams.team2)} pts
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => {
                    setStep(1)
                    setPlayerList('')
                    setPlayers([])
                    setTeams({ team1: [], team2: [] })
                  }}
                  className="w-full bg-[#333] hover:bg-[#444] text-[#f2f2f2]"
                >
                  Crear Nuevos Equipos
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}