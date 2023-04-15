import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu';


const Home = () => {
    return (
        <section id='home'>
            <Menu/>
            <Outlet></Outlet>
        </section>
    );

    }
export default Home;
