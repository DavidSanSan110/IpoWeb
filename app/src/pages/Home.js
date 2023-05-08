import React from 'react';
import NotLoggedNavbar from '../components/Navbars/NotLoggedNavbar'
import Navbar from '../components/Navbars/Navbar'
import HeroCard from '../components/HeroCard/HeroCard2'


import { useSelector } from 'react-redux';

function Home() {

    const auth = useSelector(state => state.auth);

    return (
        <>
            {auth ? <> <Navbar /> <HeroCard /> </> : <> <NotLoggedNavbar /> <HeroCard /> </>}
        </>
    );
}

export default Home;