import React from 'react';
import Header from './Header';
import Main from './Main';
import Section from './Section';
import Footer from './Footer';
import Slider from './Slider';

const Home = () => {
    return(
        <div className='home'>
            <Header />
            <Main />
            <Slider/>
            <Section/>
            <Footer/>
        </div>
    );
}
export default Home;