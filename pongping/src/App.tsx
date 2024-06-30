import React from 'react';
import './App.css';
import Header from './Layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProfilPage from './Pages/ProfilPage';
import RegisterPage from './Pages/RegisterPage';
import Layout from './Layout/Layout';
import LandingPage from './Pages/LandingPage';
import SingUpPage from './Pages/SingUpPage';
import JouxPage from './Pages/JouxPage';
import ChatPage from './Pages/ChatPage';
import Rank from './Components/Rank';
import Stats from './Components/Stats';
import MatchHistory from './Components/MatchHistory';
import OverView from './Components/OverView';
import Avievement from './Components/Avievement';


function App() {
  return (
    <main className='h-screen'>
      <BrowserRouter>
     
          <Layout children={undefined} />
          <Routes>
            <Route path="/" element ={<LandingPage />} />
            <Route path="/Pages/SingUpPage" element ={<SingUpPage />} />
            <Route path="/Pages/HomePage" element ={<HomePage />} />
            <Route path="/Pages/JouxPage" element ={<JouxPage />} />
            <Route path="/Pages/ChatPage" element ={<ChatPage />} />
            <Route path="/Pages/AboutPage" element ={<AboutPage />} />
            <Route path="/Pages/ContactPage" element ={<ContactPage />} />
            <Route path="/Pages/ProfilPage" element ={<ProfilPage />} />
            <Route path="/Pages/RegisterPage" element ={<RegisterPage />} />
            <Route path="/Components/Rank" element={<Rank/>} />
            <Route path="/Components/Stats" element={<Stats/>} />
            <Route path="/Components/MatchHistory" element={<MatchHistory />} />
            <Route path="/Components/OverView" element={<OverView/>} />
            <Route path="/Components/Avievement" element={<Avievement/>} />
          </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
