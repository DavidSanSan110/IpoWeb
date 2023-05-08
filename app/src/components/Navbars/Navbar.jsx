import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Logo } from '../../Logo';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { useState, useEffect } from 'react';

//const Links = ['Apartments', 'Create-Apartment', 'Chats'];

const NavLink = ({ children }) => (
  //Falta la propiedad href
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`/${children.toLowerCase()}`}
    fontSize={'xl'}>
    {children}
  </Link>
);

export default function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Links, setLinks] = useState([]);

  const auth = useSelector(state => state.auth);
  const role = useSelector(state => state.role);

  const user = {
    id: 1,
    name: 'Juan',
    email: 'juan@usal.es',
    profile_picture: 'https://bit.ly/dan-abramov',
    role: role
  }

  //If role is Estudiante, then Links = ['Apartments', 'Chats']
  //If role is Propietario, then Links = ['Apartments', 'Create-Apartment', 'Chats']

  useEffect(() => {
    if (role === 'Estudiante') {
      setLinks(['Apartments', 'Chats']);
    } else if (role === 'Propietario') {
      setLinks(['Apartments', 'Create-Apartment', 'Chats']);
    }
  }, [role]);
  



  const logout = async () => {
    dispatch({type: 'UPDATE_AUTH', auth: false});
    dispatch({type: 'UPDATE_ROLE', role: ''});
    navigate('/login');
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')} px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Logo />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'md'}
                  src={user?.picture_url}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={user?.picture_url}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{user?.name}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Chats</MenuItem>
                  <MenuItem>Favs</MenuItem>
                  <MenuItem>Ratings</MenuItem>
                  {user?.role === 'Propietario' ? <MenuItem>My apartments</MenuItem> : null}
                  <MenuDivider />
                  <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                  <MenuItem onClick={() => logout()}>Logout</MenuItem>
                </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}