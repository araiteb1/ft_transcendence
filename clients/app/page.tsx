import Image from 'next/image'
import Link from "next/link"
import Layout from './layout/Layout'
import RegisterPage from './page/RegisterPage'
import Header from "./layout/Header";
import SingUpPage from './page/SingUpPage';
import ProfilePage from './components/ProfilePage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  w-full h-full">
      <Header />
       <RegisterPage />
       {/* <ProfilePage/> */}
       {/* <ul>
          <li>
            <Link href={"/"}><Layout/></Link>
          </li>
       </ul> */}
    </main>
  )
}
