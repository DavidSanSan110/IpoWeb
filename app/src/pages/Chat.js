import React from 'react';
import Navbar from '../components/Navbars/Navbar'
import Chat from '../components/ChatComponent/Chat'


import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function ChatView() {

    const navigate = useNavigate();

    const auth = useSelector(state => state.auth);

    //If the user is not logged in, redirect to login page
    useEffect(() => {
        if (!auth) {
            navigate('/login');
        }
    }, [navigate, auth]);

    return (
        <>
            <Navbar />
            <Chat />
        </>
    );
}

export default ChatView;