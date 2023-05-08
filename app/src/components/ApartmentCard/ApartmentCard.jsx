import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    pseudoPropNames,
    IconButton,
    Link,
    border
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import { FaBed } from 'react-icons/fa';
  import { FaToilet, FaHeart } from 'react-icons/fa';
  import pisoImage from '../../piso.jpg';

  import { useNavigate } from 'react-router-dom';
  import { useState } from 'react';
  import { useSelector } from 'react-redux';
  
  function Rating({ rating, numReviews }) {

    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  
  function ProductAddToCart(props) {

    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(props.apartment.fav);
    const auth = useSelector(state => state.auth);

    const handleFavoriteClick = async () => {
      if (!auth) {
        navigate('/login');
        return;
      }
      
      setIsFavorite(!isFavorite);
    };

    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {props.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
          <Box position="relative">
          <Link href={'/apartment/' + props.apartment.id}>
            <Image
              src={pisoImage}
              roundedTop="lg"
            />
          </Link>
          <Icon
            as={FaHeart}
            position="absolute"
            top={4}
            right={4}
            fill={isFavorite ? 'red.500' : 'rgba(0, 0, 0, 0.5)'}
            fillOpacity={isFavorite ? 1 : 0.5}
            color={isFavorite ? 'red.500' : 'gray.300'}
            _hover={{ color: 'red.500', fill: 'red.500', fillOpacity: 1 }}
            stroke="white"
            strokeWidth={24}
            onClick={handleFavoriteClick}
            cursor="pointer"
            boxSize={6}
          />
        </Box>
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {props.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center" m={1} >
              <Box
                fontSize="sm"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                width={300}>
                {props.apartment.address} - {props.apartment.city} - {props.apartment.zip_code}
              </Box>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center" m={1}>
              {/*<Rating rating={data.rating} numReviews={props.numReviews} />*/}
              <Rating rating={props.apartment.average_rating} numReviews={props.apartment.num_ratings} />
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                {/*{data.price.toFixed(2)}*/}
                {props.apartment.price}
                <Box as="span" color={'gray.600'} fontSize="lg" ml={2}>
                  €
                </Box>
              </Box>
            </Flex>

            <Flex justifyContent="left" alignContent="center" m={1}>
              {/*Number of rooms and bathrooms with icons*/}
                <Box mr={2}>
                  <Icon as={FaBed} h={4} w={4} alignSelf={'center'} />
                  <Box as="span" color={'gray.600'} fontSize="lg" ml={2}>
                    {props.apartment.rooms}
                  </Box>
                </Box>
                <Box mr={2} ml={2} >
                  <Icon as={FaToilet} h={4} w={4} alignSelf={'center'} />
                  <Box as="span" color={'gray.600'} fontSize="lg" ml={2}>
                    {props.apartment.bathrooms}
                  </Box>
                </Box>
            </Flex>

          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductAddToCart;