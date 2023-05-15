import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Link,
  SimpleGrid,
  HStack,
  VStack,
  Carousel,
  InputGroup,
  Input,
  InputRightElement,
  Container,
  Collapse,
  Center,
  IconButton,
  Heading,
  useDisclosure,
  Stack,
  useColorModeValue,

} from '@chakra-ui/react';

import ApartmentCard from '../ApartmentCard/ApartmentCard'
import Testimonials from './Testimonials'

import { useState } from 'react';
import { BsWifi } from 'react-icons/bs';
import { BsLightbulbFill } from 'react-icons/bs';
import { FaDog,FaLightbulb } from 'react-icons/fa';

const apartments = [
  {
    "id": 1,
    "address": "Calle 1 # 1 - 1",
    "city": "Bogotá",
    "zip_code": "110111",
    "rooms": 3,
    "bathrooms": 2,
    "price": 1000,
    "picture": "https://www.ikea.com/images/bedroom-with-white-walls-and-wooden-furniture-7c6b6a9b0b9b4b0e9b9b4b0e9b9b4b0e-1364311c0b0a4b0e9b9b4b0e9b9b4b0e.jpg?f=xxxl",
    "average_rating": 4.5,
    "num_ratings": 10,
  },
  {
    "id": 2,
    "address": "Calle 2 # 2 - 2",
    "city": "Bogotá",
    "zip_code": "110111",
    "rooms": 3,
    "bathrooms": 2,
    "price": 1000,
    "picture": "https://www.ikea.com/images/bedroom-with-white-walls-and-wooden-furniture-7c6b6a9b0b9b4b0e9b9b4b0e9b9b4b0e-1364311c0b0a4b0e9b9b4b0e9b9b4b0e.jpg?f=xxxl",
    "average_rating": 4.5,
    "num_ratings": 10,
  },
  {
    "id": 3,
    "address": "Calle 3 # 3 - 3",
    "city": "Bogotá",
    "zip_code": "110111",
    "rooms": 3,
    "bathrooms": 2,
    "price": 1000,
    "picture": "https://www.ikea.com/images/bedroom-with-white-walls-and-wooden-furniture-7c6b6a9b0b9b4b0e9b9b4b0e9b9b4b0e-1364311c0b0a4b0e9b9b4b0e9b9b4b0e.jpg?f=xxxl",
    "average_rating": 4.5,
    "num_ratings": 10,
  },
]

const HeroCard = () => {

  const [showOptions, setShowOptions] = useState(false);

  const [wifiSelected, setWifiSelected] = useState(false);
  const [lightSelected, setLightSelected] = useState(false);
  const [petSelected, setPetSelected] = useState(false);

  const handleWifiClick = () => setWifiSelected(!wifiSelected);
  const handleLightClick = () => setLightSelected(!lightSelected);
  const handlePetClick = () => setPetSelected(!petSelected);

  const handleToggle = () => setShowOptions(!showOptions);


  return (
    <VStack>
    <Box textAlign={'center'} mt={20}>

      {/* Búsqueda rápida de apartamentos */}
      <Box bg={useColorModeValue('gray.100', 'gray.700')} borderRadius={'xl'} mb={20}>
      <Container maxW={'7xl'} py={8} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'} mb={-8}>
          <Heading>Search Apartments</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Center>
      <Box as="section" my={4}>
        <VStack>
        <HStack>
        <InputGroup size="lg">
          <Input placeholder="Buscar apartamentos" />
        </InputGroup>
        <Button colorScheme="blue" as={'a'} href={'/apartments'}>
           Buscar
        </Button>
        </HStack>
        <VStack>
      <Button onClick={handleToggle} mt={4}>
        {showOptions ? 'Ocultar filtros' : 'Mostrar filtros'}
        </Button>
        <Collapse in={showOptions}>
        <HStack spacing={4} mt={4}>
            <IconButton
              aria-label="Filtro Wifi"
              icon={<BsWifi />}
              colorScheme={wifiSelected ? 'blue' : 'gray'}
              variant="outline"
              onClick={handleWifiClick}
              size={'lg'}
            />
            <IconButton
              aria-label="Filtro Luz"
              icon={<FaLightbulb />}
              colorScheme={lightSelected ? 'blue' : 'gray'}
              variant="outline"
              onClick={handleLightClick}
              size={'lg'}
            />
            <IconButton
              aria-label="Filtro Mascotas"
              icon={<FaDog />}
              colorScheme={petSelected ? 'blue' : 'gray'}
              variant="outline"
              onClick={handlePetClick}
              size={'lg'}
            />
        </HStack>
        </Collapse>
    </VStack>
        </VStack>
        
      </Box>
      </Center>
      </Container>
      </Box>

      {/* Apartamentos destacados o populares */}
      <Box bg={useColorModeValue('gray.100', 'gray.700')} borderRadius={'xl'} mb={20}>
      <Container maxW={'7xl'} py={8} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'} mb={-12}>
          <Heading>Best Apartments!</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {/* Repetir este bloque para cada apartamento */}
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
          {/* Fin del bloque */}
        </SimpleGrid>
      </Container>
      </Box>
      {/*
      <Box as="section" my={4}>
        <Heading as="h2" size="lg" mb={4}>
          Apartamentos destacados
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </SimpleGrid>
      </Box>
      */}

            {/* Testimonios o valoraciones */}
            {/*
        <Box as="section" my={4}>
        <Heading as="h2" size="lg" mb={4}>
          Testimonios
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        <VStack alignItems="center">
            <Image
              boxSize="100px"
              borderRadius="full"
              src="usuario.jpg"
              alt="Usuario"
            />
            <Text fontSize="lg" fontWeight="bold">
              Nombre del usuario
            </Text>
            <Text textAlign="center">
              "Me encanta esta plataforma. Encontré el apartamento perfecto para mí y el proceso fue muy sencillo."
            </Text>
          </VStack>
          <VStack alignItems="center">
            <Image
              boxSize="100px"
              borderRadius="full"
              src="usuario.jpg"
              alt="Usuario"
            />
            <Text fontSize="lg" fontWeight="bold">
              Nombre del usuario
            </Text>
            <Text textAlign="center">
              "Me encanta esta plataforma. Encontré el apartamento perfecto para mí y el proceso fue muy sencillo."
            </Text>
          </VStack>
          <VStack alignItems="center">
            <Image
              boxSize="100px"
              borderRadius="full"
              src="usuario.jpg"
              alt="Usuario"
            />
            <Text fontSize="lg" fontWeight="bold">
              Nombre del usuario
            </Text>
            <Text textAlign="center">
              "Me encanta esta plataforma. Encontré el apartamento perfecto para mí y el proceso fue muy sencillo."
            </Text>
          </VStack>
          </SimpleGrid>
      </Box>
      */}
      <Testimonials />
    </Box>
    </VStack>
  );
};

export default HeroCard;

