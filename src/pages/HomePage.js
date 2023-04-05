import { useState } from 'react';
import { PlayerList } from '../PlayerList';
import { DiceRoller } from '../DiceRoller';
import { PlayerForm } from '../PlayerForm';


export const HomePage = () => {

    const [players, setPlayers] = useState([]);

    const handleAddPlayer = (player) => {
        // Add a single player to players[]
      setPlayers([...players, player]);
    };
  
    const handleRemovePlayer = (index) => {
      const newPlayers = [...players]; // Create new array
      newPlayers.splice(index, 1); //Remove single player from array at given index
      setPlayers(newPlayers);
    }
    //Pass add and remove players as props
    return (
        <>
            <h1>LOTR Risk Companion App</h1>
            <PlayerForm onAddPlayer={handleAddPlayer} />
            <PlayerList players={players} onRemovePlayer={handleRemovePlayer} />
        </>
    )

}