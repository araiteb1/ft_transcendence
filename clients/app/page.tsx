"use client"
import Image from 'next/image'
import Layout from './layout/Layout'
import RegisterPage from './page/RegisterPage'
import Header from "./layout/Header";
import SingUpPage from './page/SingUpPage';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  w-full h-full">
      <Header />
      <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="./page/SingUpPage" element={<SingUpPage />} />
                <Route path="./page/RegisterPage" element={<RegisterPage />} />
                <Route path="./components/ProfilePage" element={<ProfilePage />} />

            </Routes>


      </Router>
    </main>
  )
}
