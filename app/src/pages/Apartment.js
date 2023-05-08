import React from 'react';
import NotLoggedNavbar from '../components/Navbars/NotLoggedNavbar'
import Navbar from '../components/Navbars/Navbar'
import ApartmentExtendedCard from '../components/ApartmentCard/ApartmentExtendedCard'

import { useSelector } from 'react-redux';

function ApartmentView() {
    
    const auth = useSelector(state => state.auth);

    return (
        <>
            {auth ? 
            <> 
            <Navbar /> 
            <ApartmentExtendedCard />
            </> 
            : 
            <> 
            <NotLoggedNavbar /> 
            <ApartmentExtendedCard />
            </>}
        </>
    );
}

export default ApartmentView;