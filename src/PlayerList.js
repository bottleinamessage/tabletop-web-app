import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Heading,
    Button,
    Box,
    Card,
    CardHeader,
    CardBody,
} from '@chakra-ui/react';

export const PlayerList = ({ players, onRemovePlayer }) => {


    return (
        <>
            <Card>
                <CardHeader>
                    <Heading>Selected Players</Heading>
                </CardHeader>

                <CardBody>
                    <Box>
                        <OrderedList>
                            {players.map((player, index) => (
                                <ListItem listStyleType="none" key={index}>
                                    {player.name} <Button colorScheme="red" variant="outline" onClick={() => onRemovePlayer(index)}>X</Button>
                                </ListItem>
                            ))};
                        </OrderedList>
                    </Box>
                </CardBody>
            </Card>

        </>
    );


}