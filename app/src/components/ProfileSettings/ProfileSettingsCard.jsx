import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  SimpleGrid,
  Stack,
  Heading
} from '@chakra-ui/react';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    id: 1,
    name: 'Juan',
    surname: 'García',
    email: 'juangarcia@usal.es',
    profile_picture: 'https://bit.ly/dan-abramov',
    role: 'Estudiante',
    mobile: '666666666'
  });

  const handleChange = (e) => {
    //setUserData({ ...userData, [e.target.name]: e.target.value });
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Aquí puedes realizar la llamada a la API para actualizar la información del usuario
    // Por ejemplo: updateUser(userData);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <Box alignItems={'center'} textAlign={'-webkit-center'} minH={'100vh'}>
    <Box p={8} w={'90%'}>
    <Heading mb={4}>Profile Settings</Heading>
    <Stack spacing={4} p={8} borderRadius={'md'} borderColor={'whiteAlpha.900'} borderWidth={6}>
    <SimpleGrid columns={2} spacing={8}>
      <FormControl id="name">
        <FormLabel>Nombre</FormLabel>
        <Input
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Nombre"
        />
      </FormControl>
      <FormControl id="surname">
        <FormLabel>Apellidos</FormLabel>
        <Input
          name="surname"
          value={userData.surname}
          onChange={handleChange}
          placeholder="Apellidos"
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </FormControl>
      <FormControl id="mobile">
        <FormLabel>Teléfono móvil</FormLabel>
        <Input
          name="mobile"
          value={userData.mobile}
          onChange={handleChange}
          placeholder="Teléfono móvil"
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleSubmit} gridColumn={'span 2'} mt={4}>
        Guardar
      </Button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Información actualizada</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Se ha guardado correctamente</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </SimpleGrid>
    </Stack>
    </Box>
    </Box>
    
  )
    }

export default UserProfile;
