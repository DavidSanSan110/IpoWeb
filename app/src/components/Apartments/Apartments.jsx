import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Grid,
    GridItem,
    Box,
    Checkbox,
    Text,
    Switch,
    FormControl,
    FormLabel,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderMark,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

import { Button, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import ApartmentCard from '../ApartmentCard/ApartmentCard'

export default function Apartments() {

    const [loading, setLoading] = useState(true);

    const itemsPerPage = 9;

    const [filteredApartments, setFilteredApartments] = useState([])
    const [apartmetsShow, setApartmentsShow] = useState([])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesToShow, setPagesToShow] = useState([]);

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    const [filter, setFilter] = useState({
        price: [0,0],
        rooms: {
            number: 4,
        },
        bathrooms: {
            number: 2,
        },
        orderByPrice: false,
    })

    const apartment = {
        id: 1,
        address: 'Street 123',
        city: 'City',
        zip_code: '1234',
        rooms: 4,
        bathrooms: 2,
        price: 1000,
        picture: 'https://www.ikea.com/images/ektorp-3-seat-sofa-10-year-guarantee__1364483344380-s5-250-250.jpg',
        average_rating: 4.5,
        num_ratings: 10,
        fav: false,
    }

    const auth = useSelector(state => state.auth);

    //Apartments is an array with 100 apartment objects change id to i
    const apartments = Array.from({length: 100}, (v, i) => ({...apartment, 
      id: i, price: Math.floor(Math.random() * 1000) + 500, 
      fav: Math.random() >= 0.5,
      average_rating: Math.floor(Math.random() * 5) + 1,
      num_ratings: Math.floor(Math.random() * 100) + 1,
      rooms: Math.floor(Math.random() * 5) + 1,
      bathrooms: Math.floor(Math.random() * 3) + 1,
    }))

    //Event handlers
    const handlePageChange = (page) => {
      console.log("hola")
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleOrderChange = () => {
        setFilter({
            ...filter,
            orderByPrice: !filter.orderByPrice
        })
    };

    const handleBedroomsChange = (value) => {
        setFilter({
            ...filter,
            rooms: {
                number: value
            }
        })
    };

    const handleBathroomsChange = (value) => {
        setFilter({
            ...filter,
            bathrooms: {  
                number: value
            }
        })
    };

    const handleSliderChange = (value) => {
        setFilter({
            ...filter,
            price: value
        })
    };

    const handleFilterApply = () => {
        console.log(filter)

        const filteredApartments = apartments.filter(apartment => {
            return apartment.price >= filter.price[0] && apartment.price <= filter.price[1] && apartment.rooms >= filter.rooms.number && apartment.bathrooms >= filter.bathrooms.number
        })

        if(filter.orderByPrice) {
            filteredApartments.sort((a, b) => a.price - b.price)
        }

        setFilteredApartments(filteredApartments)
        setTotalItems(filteredApartments.length)
        setCurrentPage(1)

        //Save filters in local storage
        localStorage.setItem('filter', JSON.stringify(filter))

        onClose()
    }

    const applyFiltersInit = (filter, apartments) => {
        const filteredApartments = apartments.filter(apartment => {
            return apartment.price >= filter.price[0] && apartment.price <= filter.price[1] && apartment.rooms >= filter.rooms.number && apartment.bathrooms >= filter.bathrooms.number
        })

        if(filter.orderByPrice) {
            filteredApartments.sort((a, b) => a.price - b.price)
        }

        setFilteredApartments(filteredApartments)
        setTotalItems(filteredApartments.length)
        setCurrentPage(1)
    }

    const handleResetFilters = () => {
        setFilter({
            price: [min, max],
            rooms: {
                number: 4,
            },
            bathrooms: {
                number: 2,
            },
            orderByPrice: false,
        })
        setFilteredApartments(apartments)
        setTotalItems(apartments.length)
        setCurrentPage(1)

        //Remove filters from local storage
        localStorage.removeItem('filter')

        onClose()
    }

    useEffect(() => {
      console.log("useeffectarriba")
      
      const getApartments = async () => {
        
        setFilteredApartments(apartments)

        const min = Math.min(...apartments.map(apartment => apartment.price))
        const max = Math.max(...apartments.map(apartment => apartment.price))
        setMin(min)
        setMax(max)
        
        const filterStored = JSON.parse(localStorage.getItem('filter'))
        if(filterStored) {
          setFilter(filterStored)
          applyFiltersInit(filterStored, apartments)
        } else {
          setFilter({
            ...filter,
            price: [min, max]
          })

          setTotalItems(apartments.length)
          setCurrentPage(1)
        }
        setLoading(false)
      }
      getApartments();
    }, [])

    useEffect(() => {
      console.log("useeffectabajo")
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentItems = filteredApartments.slice(startIndex, endIndex);
      setApartmentsShow(currentItems);
      
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      const pagesToShow = [];
      if(totalPages > 4) {
        if(currentPage === 1) {
              pagesToShow.push(1, 2, totalPages);
          } else if(currentPage === 2) {
              pagesToShow.push(1, 2, 3, totalPages);
          } else if(currentPage === totalPages - 1) {
              pagesToShow.push(1, currentPage - 1, currentPage, totalPages);
          } else if(currentPage === totalPages) {
              pagesToShow.push(1, totalPages - 1, totalPages);
          } else {
              pagesToShow.push(1, currentPage - 1, currentPage, currentPage + 1, totalPages);
          }
      } else {
          for(let i = 1; i <= totalPages; i++) {
              pagesToShow.push(i);
          }
      }
      setPagesToShow(pagesToShow);
    }, [filteredApartments, currentPage, totalItems])
    
  
    return (
      <>
        {loading ? 
        null :
        <>
          
        <Box w='100%' h='100px' alignItems={'center'} display={'flex'} justifyContent={'right'}>
          <Button ref={btnRef} onClick={onOpen} size='lg' mr={10} variant='outline' backgroundColor={"gray.700"}>
            Filter {'>>>'}
          </Button>
        </Box>
        <Box width={'85%'} alignItems={'center'} m={'auto'}>
          <Grid templateColumns="repeat(3, 1fr)" gap={4} p={4}>
            {apartmetsShow.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} numReviews={10} />
            ))}
          </Grid>
          <Box display='flex' justifyContent='center' alignItems='center' mt={4} mb={12}>
            {pagesToShow.map((page) => (
                <Box
                key={page}
                as='button'
                onClick={currentPage === page ? null : () => handlePageChange(page)}  
                backgroundColor={currentPage === page ? 'teal.500' : 'gray.600'}
                color={'white'}
                fontWeight={'bold'}
                px={4}
                py={2}
                mr={2}
                borderRadius={'md'}
                _hover={{
                    backgroundColor: currentPage === page ? 'teal.400' : 'gray.500'
                }} 
                >
                    {page}
                </Box> 

            ))}
        </Box>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size='md'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader style={{textAlign: 'center', marginTop: '20px'}}>Filter apartments</DrawerHeader>
  
            <DrawerBody padding={8} spacing={8}>
            <FormControl display='flex' alignItems='center'>
              <FormLabel mb='0'>
                Order by price?
              </FormLabel>
              {/*<Switch onChange={handleOrderChange} isChecked={filter.orderByPrice} ml={4} /> */}
              <Checkbox onChange={handleOrderChange} isChecked={filter.orderByPrice} ml={4} />
            </FormControl>
            <FormControl display='flex' alignItems='center' justifyContent={'center'} mt={8}>
              <FormLabel mb='0'>
                Price range
              </FormLabel>
              <RangeSlider min={min} max={max} defaultValue={filter.price} step={1} onChange={(value) => handleSliderChange(value)} colorScheme='teal' mr={4}>
                <RangeSliderMark value={filter.price[0]} textAlign='center' color='white' mt='-10' ml='-5' w='12'>
                  {filter.price[0]}€
                </RangeSliderMark>
                <RangeSliderMark value={filter.price[1]} textAlign='center' color='white' mt='-10' ml='-5' w='12'>
                  {filter.price[1]}€
                </RangeSliderMark>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </FormControl>
            <FormControl display='flex' alignItems='center' mt={8}>
            <FormLabel mb='0'>
                Bedrooms
            </FormLabel>
            <NumberInput defaultValue={filter.rooms.number} ml={1} onChange={(value) => handleBedroomsChange(value)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            </FormControl>
            <FormControl display='flex' alignItems='center' mt={8}>
            <FormLabel mb='0'>
                Bathrooms 
            </FormLabel>
            <NumberInput defaultValue={filter.bathrooms.number} onChange={(value) => handleBathroomsChange(value)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            </FormControl>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={handleResetFilters}>
                Reset filters
              </Button>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={handleFilterApply}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    } 
    </>
    )
}