/**
 * Main app component to load all the other components
 */

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Resume from './Resume';
import ErrorPage from './ErrorPage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
