import { useState } from 'react';
import { PlayerList } from '../PlayerList';
import { DiceRoller } from '../DiceRoller';
import { PlayerForm } from '../PlayerForm';
import { GamePage } from './GamePage';
import { Heading, Link } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link as RouteLink, useNavigate } from 'react-router-dom';


export const HomePage = () => {
    

    // player state held in an array
    const [players, setPlayers] = useState([]); // player array
    const [gameStart, setGameStart] = useState(false); // game initially set to not started

    const navigate = useNavigate();

    const handleAddPlayer = (newPlayer) => {
        // Add a single player to players[]
      setPlayers([...players, {...newPlayer, roll: null}]); // adding role property to player
    };
  
    const handleRemovePlayer = (index) => {
      const newPlayers = [...players]; // Create new array
      newPlayers.splice(index, 1); //Remove single player from array at given index
      setPlayers(newPlayers);
    };
    
    // Boolean flag triggered by user when game should start
    const handleGameStart = () => {
      setGameStart(true); 
      handleNavigation(); // send player to game page
    };

    const handleNavigation = () => {
      // navigate to GamePage
      navigate('/game');
    };

    //Pass add and remove players as props
    return (
        <>
            <Heading>LOTR Risk Companion App</Heading>
            <PlayerForm onAddPlayer={handleAddPlayer} startGame={players.length >= 2 ? handleGameStart : null} />
            <PlayerList players={players} onRemovePlayer={handleRemovePlayer}  />

            {gameStart && <GamePage players={players} />}
        </>
    )

}