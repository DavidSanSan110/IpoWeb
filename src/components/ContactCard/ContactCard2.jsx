import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';

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
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          {...props}>
          <Avatar
            size={'xl'}
            src={
              props.image
            }
            alt={props.name}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {props.name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {props.tlf}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or{' '}
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>{' '}
            me in your posts
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge>
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}
            onClick={handleClick}
            >
            Message
          </Button>
          <Button onClick={handleClick} mt={2}>
            <Box
                as={BsFillChatFill}
                size="1.5rem"
                cursor="pointer"
            />
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }