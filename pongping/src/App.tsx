import React from 'react';
import './App.css';
import Header from './Layout/Header';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProfilPage from './Pages/ProfilPage';
import RegisterPage from './Pages/RegisterPage';
import Layout from './Layout/Layout';

function App() {
  return (
    <main className='h-screen'>
      <BrowserRouter>
          <Layout children={undefined} />
          <Routes>
            <Route path="/Pages/HomePage" element ={<HomePage />} />
            <Route path="/Pages/AboutPage" element ={<AboutPage />} />
            <Route path="/Pages/ContactPage" element ={<ContactPage />} />
            <Route path="/Pages/ProfilPage" element ={<ProfilPage />} />
            <Route path="/Pages/RegisterPage" element ={<RegisterPage />} />
          </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

// export default function App() {
//   return (
//     <main className="h-screen">
//       <div className="text-3xl border border-[red] w-full h-[80%] font-bold underline">
//         Hello world!
//       </div>
//     </main>
//   )
// }
