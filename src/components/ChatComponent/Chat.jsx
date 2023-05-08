import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, Input, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {
    Box,
    VStack,
    InputGroup,
    InputRightElement,
    Text,
    IconButton,
    HStack,
    Avatar,
    Divider,
    Icon
  } from "@chakra-ui/react";

import { FaPaperPlane, FaArrowLeft } from "react-icons/fa";

export default function Chat() {

    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    
    const [messages, setMessages] = useState([
        {
            from: 1,
            to: 2,
            message: 'Hola',
            date: new Date()
        },
        {
            from: 2,
            to: 1,
            message: 'Hola',
            date: new Date()
        },
        {
            from: 1,
            to: 2,
            message: 'Como estas?',
            date: new Date()
        },
        {
            from: 2,
            to: 1,
            message: 'Bien y tu?',
            date: new Date()
        },
        {
            from: 1,
            to: 2,
            message: 'Bien',
            date: new Date()
        }
    ]);
    //const [messages, setMessages] = useState([]);
    //const [from, setFrom] = useState(null);
    const [from, setFrom] = useState({
        id: 2,
        name: 'Juan',
        email: 'juan@usal.es',
        profile_picture: 'https://www.w3schools.com/howto/img_avatar.png'
    });
    //const [to, setTo] = useState(null);
    const [to, setTo] = useState({
        id: 1,
        name: 'JohnDoe',
        email: 'JohnDoe@usal.es',
        profile_picture: 'https://www.w3schools.com/howto/img_avatar.png'
    });
    const chatTo = useSelector(state => state.chatTo);
    const conversationTo = useSelector(state => state.conversationTo);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = async () => {
        console.log("Sending message: ", message);

        if (message === '') {
            return;
        }
        const messageJson = {
            from: from.id,
            to: to.id,
            message: message,
            date: new Date(),
            room: conversationTo
        }

        console.log(messageJson);
  

        //Add message to messages
        setMessages([...messages, messageJson]);
        setMessage('');
    }

    return (
        <>
            <Box
            h="90vh"
            w="100%"
            backgroundColor={"gray.700"}
            p={4}
            textAlign={"-webkit-center"}
          >
            <VStack
              h="full"
              w="full"
              maxW="md"
              borderWidth={1}
              borderRadius="lg"
              p={4}
              spacing={4}
              overflowY="auto"
            >
              <HStack w="full">
                <Icon onClick={() => navigate('/chats')} m={2} cursor="pointer" w={8} h={8} color="gray.500" _hover={{ color: "gray.300" }} as={FaArrowLeft} />
                <HStack>
                  <Avatar
                    name={to.name}
                    src="https://bit.ly/broken-link"
                  />
                  <Text fontSize="xl" fontWeight="bold">
                    {to.name}
                  </Text>
                </HStack>
              </HStack>
              <Divider />
              <VStack flexGrow={1} w="full" overflowY="auto" sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
                {messages.map((msg, index) => {
                  const date = new Date(msg.date);
                  const hour = String(date.getHours()).padStart(2, "0");
                  const minutes = String(date.getMinutes()).padStart(2, "0");
                  const time = `${hour}:${minutes}`;

                    return (
                        <HStack
                          key={index}
                          spacing={2}
                          alignSelf={msg.from === from.id ? "flex-end" : "flex-start"}
                        >
                          <Text bg="blue.400" p={2} borderRadius="md">
                            {msg.message}
                          </Text>
                          <Text fontSize="xs" color="gray.600">
                            {time}
                          </Text>
                        </HStack>
                      );
                    
                })}
              </VStack>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="Escribe un mensaje..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleSubmit}>
                    <FaPaperPlane />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </VStack>
          </Box>
        </>
    )    
}