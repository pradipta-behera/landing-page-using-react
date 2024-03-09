import React from 'react';
import Header from './Header';
import Main from './Main';
import Section from './Section';

const Home = () => {
    return(
        <div className='home'>
            <Header />
            <Main />
            <Section/>
        </div>
    );
}
export default Home;