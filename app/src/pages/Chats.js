import React from 'react';
import Navbar from '../components/Navbars/Navbar'
import Chats from '../components/ChatsComponent/Chats'


import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function ChatsView() {

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
            <Chats />
        </>
    );
}

export default ChatsView;