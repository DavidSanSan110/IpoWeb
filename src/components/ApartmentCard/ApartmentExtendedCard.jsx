import { Grid, GridItem, Text, UnorderedList, ListItem, Box, SimpleGrid } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import Map from '../Map/Map';
import ContactCard from '../ContactCard/ContactCard2';
import Carousel from '../Carousel/Carousel';

export default function ApartmentExtendedCard() {

  const { id } = useParams();

  const items = [
    'Lorem ipsum dolor sit amet.',
    'Integer.',
    'Aliquam porta.',
    'Nullam a nun.',
    'Vestibulum.',
    'Integer ultrices.',
  ]

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} p={10} border={'1px solid #e2e8f0'} borderRadius={'lg'} w={'90%'} m={'auto'} marginTop={'2%'} marginBottom={'2%'}>
        <GridItem colSpan={2}>
            <Carousel />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }} alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'} textAlign={'center'} border={'1px solid #e2e8f0'} borderRadius={'lg'} p={10} >
          <Text fontSize="2xl" fontWeight="bold">Information</Text>
          <Text my={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit id diam id sodales. Aliquam porta hendrerit est, ac interdum dolor consequat quis. Nullam a nunc ac lorem vestibulum vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ultrices enim sit amet enim aliquam ultrices.
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }} alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'} textAlign={'center'} border={'1px solid #e2e8f0'} borderRadius={'lg'} p={10} >
          <Text fontSize="2xl" fontWeight="bold">Properties</Text>
          
          <UnorderedList my={4}>
          <SimpleGrid columns={[1, 2]} spacing={4}>
            {items.map((item, index) => (
              <ListItem key={index} display="flex" alignItems="center">
                <Box as={FaCheck} mr={2} color="green.500" />
                {item}
              </ListItem>
            ))}
          </SimpleGrid>
          </UnorderedList>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }} alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'} textAlign={'center'} border={'1px solid #e2e8f0'} borderRadius={'lg'} p={10} >
          <Text fontSize="2xl" fontWeight="bold">Contact</Text>
          <ContactCard name="Juan" tlf="666666666" email="juan@usal.es" image="https://bit.ly/sage-adebayo" id="2" />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }} alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'} textAlign={'center'} border={'1px solid #e2e8f0'} borderRadius={'lg'} p={10}>
          <Text fontSize="2xl" fontWeight="bold" marginBottom={8}>Location</Text>
          <Map direction="Calle Lucio Marineo 9, 37003 Salamanca" />
        </GridItem>
      </Grid>

  );
}