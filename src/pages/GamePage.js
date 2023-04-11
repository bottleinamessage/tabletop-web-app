import { Text } from "@chakra-ui/react";
import { useState } from "react";


export const GamePage = ({ players }) => {
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

    // roll = players rolled virtual die
    // update the current player's roll property with the value of the roll. 
    const handleRoll = (roll) => {
        const newPlayers = [...players]; // Create new array
        newPlayers[currentPlayerIndex].roll = roll;
      };
  
      // Grab the current player, add 1
      // Divie the new player index by the total player (e.g. currentPlayerIndex = 2 + 1) 3 % 4); result of 3
      const handleNextPlayer = () => {
        setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
      };

      return (

        <>
        <Text>
            Roll Information goes here TODO
        </Text>
        </>
      );
}