import React from 'react';
import { AuthenticationImage } from "./components/Login/AuthenticationImage";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavbarNested } from './components/Navbar/NavbarNested'; 
import { HeaderMegaMenu } from "./components/MainMenu/HeaderMegaMenu";
import Register from "./components/Register/Register";
import { ActionToggle } from "./components/darkbutton/ActionToggle";
import ExploreTools from "./components/exploretools/exploretools";
import ToolsDocs from "./components/toolsdocs/toolsdocs"; // Use uppercase T


function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<AuthenticationImage />} />
          <Route path="/home" element={<NavbarNested />} />
          <Route path="/Menu" element={<HeaderMegaMenu />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Logout" element={<Navigate to="/login" />} /> 
          <Route path="/exploretools" element={<ExploreTools />} />
          <Route path="/toolsdocs" element={<ToolsDocs />} />
        </Routes>
      </BrowserRouter>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <ActionToggle />
      </div>
    </MantineProvider>
  )
}

export default App;