import { Box, Text, Grid, GridItem, Avatar, Center, Divider, VStack, HStack, UnorderedList, ListItem, Link, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

export default function ProfileCard() {

    const cardData = {
        name: 'Nombre',
        surname: 'Apellidos',
        num_ratings: 44,
        years: 2,
        profile_image: 'https://bit.ly/sage-adebayo',
    }

    const userData = [
      {'Nací en': 'Salamanca'},
      {'Vivo en': 'Salamanca'},
      {'Estudié en': 'Universidad de Salamanca'},
      {'Idiomas': 'Español, Inglés'},
      {'Aficiones': 'Leer, viajar, deporte'},
      {'Trabajo': 'Software Developer en ShareRooms'},
      {'Mi pasión': 'La tecnología y la innovación'}
    ]

    const ratings = [
        {
          id: 1,
          name: 'Juan',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit id diam id sodales. Aliquam porta hendrerit est, ac interdum dolor consequat quis. Nullam a nunc ac lorem vestibulum vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ultrices enim sit amet enim aliquam ultrices.',
          date: '2021-05-06',
          profile_image: 'https://bit.ly/sage-adebayo'
        },
        {
          id: 2,
          name: 'María',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit id diam id sodales. Aliquam porta hendrerit est, ac interdum dolor consequat quis. Nullam a nunc ac lorem vestibulum vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ultrices enim sit amet enim aliquam ultrices.',
          date: '2022-05-05',
          profile_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5GXSBPvMxOJMLf9vZQR5Czlc1UmhbwlqeA&usqp=CAU'
        },
      ]

    return (
      <Center>
        <Box width={'80%'}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} p={10} w={'90%'} m={'auto'} marginTop={'2%'} marginBottom={'2%'}>
            <GridItem colSpan={1} borderRadius="xl" boxShadow="xl" p={5} bg={useColorModeValue('white', 'gray.900')}>
            <HStack spacing={10} align={'center'} justify={'center'}>
                <VStack>
                <Avatar name={cardData.name} src={cardData.profile_image} m={2} size="xl" />
                <Text fontSize="lg" fontWeight={'bold'}>{cardData.name}</Text>
                <Text fontSize="lg" fontWeight={'bold'}>{cardData.surname}</Text>
                </VStack> 
                <VStack>
                  <Text fontSize="2xl" fontWeight={'bold'}>{cardData.num_ratings}</Text>
                  <Text fontSize="sm">Valoraciones</Text>
                  <Divider border={'1px solid'} />
                  <Text fontSize="2xl" fontWeight={'bold'}>{cardData.years}</Text>
                  <Text fontSize="sm">Años en ShareRooms</Text>
                </VStack>
            </HStack>
            </GridItem>

            {/*Gird item ocuppie 2 columnas*/}
            <GridItem colSpan={2} borderRadius="xl" boxShadow="xl" p={5} bg={useColorModeValue('white', 'gray.900')}>
              <Text fontSize="4xl" fontWeight={'bold'} mb={4}>Sobre mí</Text>
              <SimpleGrid columns={2} spacing={10}>
                {userData.map((data, index) => (
                  <Box key={index}>
                    <Text fontSize="lg" fontWeight={'bold'}>{Object.keys(data)}: {Object.values(data)}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </GridItem>
        </Grid>
        </Box>
        </Center>
    )
}