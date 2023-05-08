import React from 'react';
import NotLoggedNavbar from '../components/Navbars/NotLoggedNavbar'
import LoginCard from '../components/LoginCard/LoginCard'

function Login() {

    return (
        <>
            <NotLoggedNavbar />
            <LoginCard />
        </>
    );
}

export default Login;