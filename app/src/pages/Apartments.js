import React from 'react';
import NotLoggedNavbar from '../components/Navbars/NotLoggedNavbar'
import Navbar from '../components/Navbars/Navbar'
import Apartments from '../components/Apartments/Apartments';
import { useSelector } from 'react-redux';

function ApartmentsView() {
    
    const auth = useSelector(state => state.auth);


    return (
        <>
            {auth ? 
            <> 
            <Navbar /> 
            <Apartments />
            </> 
            : 
            <> 
            <NotLoggedNavbar /> 
            {/*<Grid templateColumns="repeat(3, 1fr)" gap={4} p={4}>
                {Array(5).fill().map((_, i) => Array(2).fill().map((_, j) => <GridItem gridColumn={j} gridRow={i+1} key={i*j+j}><ApartmentCard /></GridItem>))}
                <GridItem gridColumn={3} rowSpan={5}><Box w="80%" h="100%" bg="tomato" m={10}></Box></GridItem>
            </Grid>*/}
            <Apartments />
            </>}
        </>
    );
}

export default ApartmentsView;