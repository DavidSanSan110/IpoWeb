import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  HStack
} from '@chakra-ui/react';

export default function HeroCard() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Make money from <br />
            <Text as={'span'} color={'green.400'}>
              your audience
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction={'column'}
            spacing={6}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <HStack spacing={4}>
            <Text>Entrar como invitado: </Text>
            <Button
              as={'a'}
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
              href={'/dashboard'}>
              Dashboard
            </Button>
            </HStack>
            <HStack spacing={4}>
            <Text>Entrar iniciando sesión: </Text>
            <Button
              as={'a'}
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
              href={'/login'}>
              Login
            </Button>
            <Text fontSize={'xl'}> / </Text>
            <Button
              as={'a'}
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
              href={'/register'}>
              Register
            </Button>
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}