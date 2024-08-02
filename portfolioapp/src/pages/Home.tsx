// src/pages/Home.js
//import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";

const Hero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const NameTextColor = {
    color: 'rgb(182 129 22)'
}

const Home = () => {
    return (
        <Hero>
            <motion.h1 initial={{ opacity: 0 }
            } animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <span className="row teko-font teko-font-size-regular" style={ NameTextColor }> Hello,<br/> I'm Heetesh Panghanti </span>
            </motion.h1>
            < motion.p initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                <div className="teko-font teko-font-size-medium mt-n1">A Full Stack Engineer & Consultant</div>
            </motion.p>
            < motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <NavLink to="/projects" className="teko-font teko-font-size-small mt-n1">View My Work</NavLink>
            </motion.p>
        </Hero>
    );
};

export default Home;