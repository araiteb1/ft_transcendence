import Image from 'next/image'
import Layout from './layout/Layout'
import RegisterPage from './page/RegisterPage'
import Header from "./layout/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  w-full ">
       <Header />
      <div className=' h-screen'>
        <RegisterPage />
      </div>
    </main>
  )
}
