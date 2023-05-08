import { Box, Text, Image, Link, Button } from '@chakra-ui/react';
import { BsFillChatFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ContactCard(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(props.id);
        dispatch({type: 'UPDATE_CHAT_TO', chatTo: parseInt(props.id)});
        navigate('/chat');
    }

    return (
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="lg"
        padding="1rem"
        width="full"
        height="full"
        {...props}
        >
        <Image
            src={props.image}
            alt={props.name}
            borderRadius="full"
            width="100px"
            height="100px"
            objectFit="cover"
        />
        <Text fontSize="xl" fontWeight="bold" marginTop="1rem">
            {props.name}
        </Text>
        <Text fontSize="lg" fontWeight="semibold" marginTop="0.5rem">
            {props.tlf}
        </Text>
        <Text fontSize="lg" marginTop="0.5rem">
            {props.email}
        </Text>
        <Button onClick={handleClick} mt={2} colorScheme="blue" variant="outline">
        <Box
            as={BsFillChatFill}
            size="1.5rem"
            color="blue.500"
            cursor="pointer"
        />
        </Button>
        </Box>
    );
}