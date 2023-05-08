import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Avatar,
  Text,
  Spacer,
  IconButton,
  Divider,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { RiCheckDoubleFill as CheckIcon } from 'react-icons/ri';

import { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ChatListItem = ({
  userName,
  lastMessage,
  lastMessageDate,
  profilePicture,
  last_message_mine,
  readed,
  onClick,
}) => {
  const dateraw = new Date(lastMessageDate);
  const day = String(dateraw.getDate()).padStart(2, "0");
  const month = String(dateraw.getMonth() + 1).padStart(2, "0");
  const year = dateraw.getFullYear();
  const date = `${day}/${month}/${year}`;
  const hour = String(dateraw.getHours()).padStart(2, "0");
  const minutes = String(dateraw.getMinutes()).padStart(2, "0");
  const time = `${hour}:${minutes}`;
  return(<HStack w="full" py={3} px={4} onClick={onClick}>
  <Avatar src={profilePicture} />
  <VStack alignItems="start" spacing={0}>
    <Text fontWeight={readed ? 'normal' : 'bold'}>{userName}</Text>
    <Flex alignItems="center">
      {last_message_mine && <Icon as={CheckIcon} boxSize="14px" mr={1} />}
      <Text fontSize="sm" fontWeight={readed ? 'normal' : 'bold'}> {lastMessage}</Text>
    </Flex>
  </VStack>
  <Spacer />
  <VStack alignItems="end" spacing={0}>
    <Text fontSize="xs" fontWeight={readed ? 'normal' : 'bold'}>{date + " - " + time}</Text>
    <IconButton
      aria-label="Open chat"
      icon={<ChatIcon />}
      size="xs"
      variant="outline"
    />
  </VStack>
</HStack>)

}

const ChatList = ({ conversations, onClick }) => (
  <VStack w="full" divider={<Divider />} border={1} borderColor={'white'}>
    <Text fontSize="2xl" fontWeight="bold" py={4}>
      Chats
    </Text>
    {conversations.map((conversation) => (
      <ChatListItem
        key={conversation.conversation_id}
        userName={conversation.other_user_name}
        lastMessage={conversation.last_message}
        lastMessageDate={conversation.last_message_date}
        profilePicture={conversation.other_user_profile_picture}
        last_message_mine={conversation.last_message_mine}
        readed={conversation.readed}
        onClick={() => onClick(conversation.conversation_id, conversation.other_user_id, conversation.readed)}
      />
    ))}
  </VStack>
);

export default function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [conversations, setConversations] = useState([
    {
      conversation_id: 1,
      last_message: 'Hey, how are you?',
      last_message_mine: true,
      last_message_date: '2021-05-01T14:24:00.000Z',
      readed: true,
      other_user_id: 2,
      other_user_name: 'John Doe',
      other_user_profile_picture: 'https://example.com/profile-pic-1.jpg',
    },
    {
      conversation_id: 2,
      last_message: 'Are you coming to the party?',
      last_message_mine: false,
      last_message_date: '2021-05-01T10:34:00.000Z',
      readed: false,
      other_user_id: 3,
      other_user_name: 'Jane Smith',
      other_user_profile_picture: 'https://example.com/profile-pic-2.jpg',
    },
  ]);

  const onClick = async (conversation_id, other_user_id, readed) => {
    dispatch({ type: 'UPDATE_CONVERSATION_TO', conversationTo: conversation_id });
    dispatch({ type: 'UPDATE_CHAT_TO', chatTo: other_user_id });
    navigate('/chat');
  };

  return (
    <Box p={6} maxW="lg" mx="auto" boxShadow="lg" bg={'gray.800'} mt={10} borderRadius={10} minH={'100vh'}>
      <ChatList conversations={conversations} onClick={onClick} />
    </Box>
  );
}
