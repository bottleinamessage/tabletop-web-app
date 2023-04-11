import { useState } from 'react';
import { PlayerList } from '../PlayerList';
import { DiceRoller } from '../DiceRoller';
import { PlayerForm } from '../PlayerForm';
import { GamePage } from './GamePage';
import { Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link as RouteLink } from 'react-router-dom';


export const HomePage = () => {

    // player state held in an array
    const [players, setPlayers] = useState([]); // player array
    const [gameStart, setGameStart] = useState(false); // game initially set to not started

    const handleAddPlayer = (player) => {
        // Add a single player to players[]
      setPlayers([...players, {...player, roll: null}]); // adding role property to player
    };
  
    const handleRemovePlayer = (index) => {
      const newPlayers = [...players]; // Create new array
      newPlayers.splice(index, 1); //Remove single player from array at given index
      setPlayers(newPlayers);
    };
    
    // Boolean flag triggered by user when game should start
    const startGame = () => {
      setGameStart(true); 
      <RouteLink to="game"/>
    };


    //Pass add and remove players as props
    return (
        <>
            <h1>LOTR Risk Companion App</h1>
            <PlayerForm onAddPlayer={handleAddPlayer} startGame={players.length >= 2 ? startGame : null} />
            <PlayerList players={players} onRemovePlayer={handleRemovePlayer}  />

            {gameStart && <GamePage players={players} />}
        </>
    )

}