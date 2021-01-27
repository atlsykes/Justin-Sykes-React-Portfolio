import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Homecard from '../../components/card/homecard'
import Footer from '../../components/footer/footer'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Homecard/>
            <Footer/>
        </div>
    );
};

export default Home;