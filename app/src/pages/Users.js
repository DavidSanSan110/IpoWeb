import React from 'react';
import Navbar from '../components/Navbars/Navbar'
import NotLoggedNavbar from '../components/Navbars/NotLoggedNavbar'
import ProfileCard from '../components/ProfileCard/ProfileCard'
import { useSelector } from 'react-redux';

function UsersView() {
    
    const auth = useSelector(state => state.auth);


    return (
        <>
            {auth ? 
            <> 
            <Navbar /> 
            <ProfileCard />
            </> 
            : 
            <> 
            <NotLoggedNavbar /> 
            <ProfileCard />
            </>}
        </>
    );
}

export default UsersView;