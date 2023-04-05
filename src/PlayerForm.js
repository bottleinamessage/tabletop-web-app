import { useState } from "react";
import { FormControl, FormLabel, Button, FormErrorMessage, FormHelperText, Input } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react';


// Component for homepage player form
export const PlayerForm = ({onAddPlayer}) => {
    // state variable that contains an array of objects (players) storing player name
    const [playerName, setPlayerName] = useState("");

    // On Form Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        onAddPlayer({ name: playerName }); // Add player
        setPlayerName(""); // Clear after form submission
    };
    

    // Grab current value of name input field
    const handleInputChange = (e) => setPlayerName(e.currentTarget.value);  // 'e' = event

    // Form Validation
    const isError = playerName === '';

    // ' <> </>' <-- React Fragment 
    return (
        <>
            <Card size='lg'>
                <CardHeader>
                    <Heading size='lg'>Enter Players To Begin</Heading>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired isInvalid={isError}>
                            <FormLabel>Username</FormLabel>
                            <Input type='text' value={playerName} onChange={handleInputChange} placeholder='Joe Dirt'/>
                            <Button type='submit'>Add Player</Button>

                            {!isError ? (
                                null
                            ) : (
                                <FormErrorMessage>Username required</FormErrorMessage>
                            )}

                        </FormControl>
                    </form>

                </CardBody>
            </Card>
        </>

    )

}