import { CardBody, CardHeader, ListItem, UnorderedList, Button, Box, Text, Card } from "@chakra-ui/react";
import { useState } from "react";

export const DiceRoller = ({ players, onRoll, onNextPlayer }) => {
    const [currentRoll, setCurrentRoll] = useState(0);

    const handleRoll = () => {
        const newRoll = Math.floor(Math.random() * 6) + 1;
        setCurrentRoll(newRoll);
        onRoll(newRoll);
        onNextPlayer();
    }

    return (
        <>
            <Card>
                <CardHeader>Dice Combat</CardHeader>
                <CardBody>
                    <Text>Current Roll: </Text>
                    <Button onClick={handleRoll} >Roll</Button>
                    <Box>
                        <UnorderedList>
                            {players.map((player) => (
                                <ListItem key={player.name}>
                                    {player.name} rolled: {player.roll || 'N/A'}
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                </CardBody>
            </Card>
        </>
    );

};