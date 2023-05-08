import React from 'react';
import {  ChakraProvider, localStorageManager, extendTheme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store/index';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Apartments from './pages/Apartments';
import CreateApartment from './pages/CreateApartment';
import ApartmentExtendedCard from './components/ApartmentCard/ApartmentExtendedCard';
import Apartment from './pages/Apartment';
import Chat from './pages/Chat';
import Chats from './pages/Chats';
import Profile from './pages/Profile';
import Footer from './components/Footer/Footer';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate  persistor={persistStore(store)}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/apartments" element={<Apartments />} />
            <Route exact path="/apartment/:id" element={<Apartment />} />
            <Route exact path="/create-apartment" element={<CreateApartment />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/chats" element={<Chats />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
