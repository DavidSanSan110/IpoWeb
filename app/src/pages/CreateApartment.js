import React from 'react';
import Navbar from '../components/Navbars/Navbar'
import CreateApartment from '../components/Apartments/CreateApartment';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function CreateApartmentView() {

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
            <CreateApartment />
        </>
    );
}

export default CreateApartmentView;