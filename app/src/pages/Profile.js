import React from 'react';
import Navbar from '../components/Navbars/Navbar'
import ProfileCard from '../components/ProfileSettings/ProfileCard';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function ProfileView() {

    const navigate = useNavigate();

    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (!auth) {
            navigate('/login');
        }
    }, [navigate, auth]);
    
    return (
        <>
            <Navbar />
            <ProfileCard />
        </>
    );
}

export default ProfileView;