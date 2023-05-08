import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';



import { Logo } from '../../Logo'

const Links = ['Apartments'];

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

export default function NotLoggedNavbar() {
  
  return (
    <>
      <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')} px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
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

          <Spacer />

          {/* ShareRooms text */}
          <Text fontSize="xl" fontWeight="bold" mr={8}>
            ShareRooms
          </Text>

          <Spacer />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Menu>
              <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                <Button
                    as={'a'}
                    fontSize={'xl'}
                    fontWeight={400}
                    variant={'link'}
                    href={'login'}>
                    Sign In
                </Button>
                <Button
                    as={'a'}
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'xl'}
                    fontWeight={600}
                    color={'white'}
                    bg={'pink.400'}
                    href={'register'}
                    _hover={{
                    bg: 'pink.300',
                    }}>
                    Sign Up
                </Button>
              </Stack>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}