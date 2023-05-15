import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  Switch,
  Icon,
  FormHelperText,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { BsFillTrashFill } from 'react-icons/bs';
import './style.css';

import { debounce } from 'lodash';

function CreateApartmentView() {
  const [apartmentAddress, setApartmentAddress] = useState('');
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [errorMessageAddress, setErrorMessageAddress] = useState('');
  const [showErrorAnimation, setShowErrorAnimation] = useState(false);
  const [apartmentCity, setApartmentCity] = useState('');
  const [apartmentZipCode, setApartmentZipCode] = useState('');
  const [apartmentPrice, setApartmentPrice] = useState('');
  const [apartmentPicture, setApartmentPicture] = useState(null);
  const [apartmentDescription, setApartmentDescription] = useState('');
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState([]);
  const [onlyRooms, setOnlyRooms] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const vibrateAnimation = {
    animationName: "vibrate",
    animationDuration: "0.2s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  };
  
  const handleApartmentAddressChange = (event) => {
    setApartmentAddress(event.target.value);
  };
  

  const handleApartmentCityChange = (event) => {
    setApartmentCity(event.target.value);
  };

  const handleApartmentZipCodeChange = (event) => {
    setApartmentZipCode(event.target.value);
  };

  const handleApartmentPriceChange = (event) => {
    setApartmentPrice(event.target.value);
  };

  const handleApartmentPictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setApartmentPicture(reader.result);
    };

    if(file) {
      reader.readAsDataURL(file);
    } else {
      setApartmentPicture(null);
    }
  };

  const handleApartmentDescriptionChange = (event) => {
    setApartmentDescription(event.target.value);
  };

  const handleAddRoomClick = () => {
    //setRooms([...rooms, { price: '', description: '', picture: '' }]);
    
    if (newRoom.length === 0) {
      console.log("Dentro")
      setNewRoom([...newRoom, { name: '', price: '', description: '', picture: '' }]);
    } else {
      alert('Debe guardar o eliminar la habitación en creación');
    }
  };

  const handleNewRoomNameChange = (event) => {
    const newRoomv = [...newRoom];
    newRoomv[0].name = event.target.value;
    setNewRoom(newRoomv);
  };

  const handleNewRoomPriceChange = (event) => {
    const newRoomv = [...newRoom];
    newRoomv[0].price = event.target.value;
    setNewRoom(newRoomv);
  };

  const handleNewRoomDescriptionChange = (event) => {
    const newRoomv = [...newRoom];
    newRoomv[0].description = event.target.value;
    setNewRoom(newRoomv);
  };

  const handleNewRoomPictureChange = (event) => {
    const newRoomv = [...newRoom];
    newRoomv[0].picture = event.target.value;
    setNewRoom(newRoomv);
  };

  const handleRoomNameChange = (index, event) => {
    const newRooms = [...rooms];
    newRooms[index].name = event.target.value;
    setRooms(newRooms);
    };

  const handleRoomPriceChange = (index, event) => {
    const newRooms = [...rooms];
    newRooms[index].price = event.target.value;
    setRooms(newRooms);
  };

  const handleRoomDescriptionChange = (index, event) => {
    const newRooms = [...rooms];
    newRooms[index].description = event.target.value;
    setRooms(newRooms);
  };

  const handleRoomPictureChange = (index, event) => {
    const newRooms = [...rooms];
    newRooms[index].picture = event.target.value;
    setRooms(newRooms);
  };

  const handleRoomCollapseClick = (index) => {
    const newRooms = [...rooms];
    newRooms[index].collapsed = !newRooms[index].collapsed;
    setRooms(newRooms);
  };

  /*const handleRoomDeleteClick = (index) => {
    const newRooms = [...rooms];
    newRooms.splice(index, 1);
    setRooms(newRooms);
    };*/
    const handleRoomDeleteClick = (index) => {
    console.log(rooms)
    const newRooms = [...rooms];
    newRooms.splice(index, 1);
    console.log(newRooms)
    setRooms(newRooms);
    };

  const handleNewRoomCreate = () => {
    //Check required fields
    if (!newRoom[0].name || !newRoom[0].price) {
      alert('Debe llenar los campos requeridos');
      return;
    }

    setRooms([...rooms, newRoom[0]]);
    setNewRoom([]);
  }

  const handleNewRoomDelete = () => {
    setNewRoom([]);
  }

  const handleCreateApartmentClick = () => {
    // Lógica para enviar los datos del apartamento y las habitaciones al servidor
    console.log('Apartment:', {
      address: apartmentAddress,
      city: apartmentCity,
      zipCode: apartmentZipCode,
      price: apartmentPrice,
      picture: apartmentPicture,
      description: apartmentDescription,
      rooms,
    });

    //Check required fields
    /*
    if (!apartmentAddress || !apartmentCity || !apartmentZipCode || (!apartmentPrice && !onlyRooms)) {
      alert('Debe llenar los campos requeridos');
      console.log(apartmentAddress, apartmentCity, apartmentZipCode, apartmentPrice, onlyRooms);
      return;
    }

    //Si only rooms, debe haber al menos una habitación
    if (onlyRooms && rooms.length === 0) {
      alert('Debe agregar al menos una habitación');
      return;
    }

    //Si is not valid address dar error
    if (!isValidAddress) {
      alert('La dirección no es válida');
      return;
    }*/

    //Open modal
    setIsOpen(true);

    // Lógica para limpiar los campos del formulario
    setApartmentAddress('');
    setApartmentCity('');
    setApartmentZipCode('');
    setApartmentPrice('');
    setApartmentPicture('');
    setApartmentDescription('');
    setRooms([]);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const checkStreet = async (street) => {
      if (!street) {
        return;
      }
      console.log("checkStreet");
      const url = "https://nominatim.openstreetmap.org/search/" + street + "?format=json&addressdetails=1&limit=1";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      console.log(data.length)
      if (data.length > 0 && data[0].address.country === 'España') {
        setApartmentCity(data[0].address.city);
        setApartmentZipCode(data[0].address.postcode);
        setIsValidAddress(true);
        setErrorMessageAddress('');
      } else {
        setApartmentCity('');
        setApartmentZipCode('');
        setIsValidAddress(false);
        setShowErrorAnimation(true);
        setTimeout(() => {
          setShowErrorAnimation(false);
        }, 2000);
        setErrorMessageAddress('Dirección no encontrada');

      }
    };

    const debounceCheckStreet = debounce(checkStreet, 2000);
    debounceCheckStreet(apartmentAddress);

    return () => {
      debounceCheckStreet.cancel();
    };
  }, [apartmentAddress]);
  

  return (
    <Box alignItems={'center'} textAlign={'-webkit-center'} minH={'100vh'}>
    <Box p={8} w={'90%'}>
      <Heading mb={4}>Create Apartment</Heading>
      <Stack spacing={4} p={8} borderRadius={'md'} borderColor={'whiteAlpha.900'} borderWidth={6}>
        <SimpleGrid columns={2} spacing={8}>
        <FormControl isRequired>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            placeholder="Ej. 123 #45-67"
            value={apartmentAddress}
            onChange={handleApartmentAddressChange}
            isInvalid={!isValidAddress}
            className={showErrorAnimation ? 'vibrate' : ''}
          />
          <FormHelperText color="red.500">{errorMessageAddress}</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            placeholder="Ej. Bogota"
            value={apartmentCity}
            onChange={handleApartmentCityChange}
            disabled
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Zip Code</FormLabel>
          <Input
            type="text"
            placeholder="Ej. 123456"
            value={apartmentZipCode}
            onChange={handleApartmentZipCodeChange}
            disabled
            />
        </FormControl>
        <SimpleGrid columns={2} spacing={8}>
        <FormControl isRequired={!onlyRooms}>
        <FormLabel>Apartment Price</FormLabel>
        <Input
            type="text"
            placeholder="Ej. 50000"
            value={apartmentPrice}
            onChange={handleApartmentPriceChange}
            disabled={onlyRooms}
        />
        </FormControl>
        <Box display="flex" alignItems="center" mt={8}>
        <Text fontSize="sm" >Only Rooms</Text>
        <Switch onChange={() => setOnlyRooms(!onlyRooms)} defaultChecked={onlyRooms} ml={4} />
        </Box>
        </SimpleGrid>
        <FormControl>
        <FormLabel>Apartment Picture</FormLabel>
        <Input
            type="file"
            accept='image/*'
            onChange={handleApartmentPictureChange}
        />
        {apartmentPicture && (
            <Image src={apartmentPicture} alt="apartment" mt={4} />
        )}
        </FormControl>
        <FormControl>
        <FormLabel>Apartment Description</FormLabel>
        <Textarea
            placeholder="Ej. Beautiful apartment"
            value={apartmentDescription}
            onChange={handleApartmentDescriptionChange}
        />
        </FormControl>
        </SimpleGrid>
        <Box>
        <Heading size="md" mb={2}>
            Rooms
        </Heading>
        {rooms.map((room, index) => (
            <Box
            key={index}
            p={2}
            m={6}
            borderWidth={1}
            borderColor="gray.200"
            borderRadius="md"
            cursor="pointer"
            >
            <SimpleGrid columns={5} spacing={4}>
                <Text>
                <b>Name:</b> {room.name}
                </Text>
                <Text>
                <b>Price:</b> {room.price}
                </Text>
                <Text>
                <b>Description:</b> {room.description.length > 10 ? room.description.substring(0, 10) + '...' : room.description}
                </Text>
                <Text>
                <b>Picture:</b> {room.picture.length > 10 ? room.picture.substring(0, 10) + '...' : room.picture}
                </Text>
                <Button variant="link" onClick={() => handleRoomDeleteClick(index)}>
                 <Icon as={BsFillTrashFill} />
                </Button>
            </SimpleGrid>
            </Box>
        ))}
        {newRoom.map((room, index) => (
            <Box
            key={index}
            p={4}
            borderWidth={1}
            borderColor="gray.200"
            borderRadius="md"
            //onClick={() => handleRoomCollapseClick(index)}
            cursor="pointer"
            >
            <Stack spacing={4}>
                <Box display="flex" justifyContent="space-between">
                <FormControl isRequired>
                    <FormLabel>Room Name</FormLabel>
                    <Input
                    type="text"
                    placeholder="Ej. Main Room"
                    value={room.name}
                    onChange={(event) => handleNewRoomNameChange(event)}
                    />
                </FormControl>
                {/*<Button size="xs" variant="link" onClick={() => handleRoomCollapseClick(index)}>
                    {room.collapsed ? '+' : '-'}
                </Button>*/}
                </Box>
                {!room.collapsed && (
                <Stack spacing={4}>
                    <FormControl isRequired>
                    <FormLabel>Room Price</FormLabel>
                    <Input
                        type="text"
                        placeholder="Ej. 200000"
                        value={room.price}
                        onChange={(event) => handleNewRoomPriceChange(event)}
                    />
                    </FormControl>
                    <FormControl>
                    <FormLabel>Room Description</FormLabel>
                    <Textarea
                        placeholder="Ej. Beautiful room"
                        value={room.description}
                        onChange={(event) => handleNewRoomDescriptionChange(event)}
                    />
                    </FormControl>
                    <FormControl>
                    <FormLabel>Room Picture</FormLabel>
                    <Input
                        type="text"
                        placeholder="Ej. https://picsum.photos/200"
                        value={room.picture}
                        onChange={(event) => handleNewRoomPictureChange(event)}
                    />
                    </FormControl>
                    <SimpleGrid columns={2} spacing={8}>
                    <Button size="md" onClick={() => handleNewRoomCreate()} >
                      Save Room
                    </Button>
                    <Button size="md" onClick={() => handleNewRoomDelete()} color={'red.500'}>
                      Delete Room
                    </Button>
                    </SimpleGrid>
                </Stack>
                )}
            </Stack>
            </Box>
        ))}
        <Button mt={4} onClick={handleAddRoomClick}>
            + Add Room
        </Button>
        </Box>
        <Button colorScheme="blue" onClick={handleCreateApartmentClick}>
            Create Apartment
        </Button>
        </Stack>
        {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Apartment Registered Successfully!</ModalBody>
          <ModalFooter>
          <Button as={'a'} href={'/apartments'} ml={3} variant="ghost" textDecoration={'underline'} border={'white'}>
              Apartments
            </Button>
            <Button colorScheme="blue" onClick={closeModal} ml={3}>
              <Text>
                Close
              </Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    </Box>
    );
};

export default CreateApartmentView;

