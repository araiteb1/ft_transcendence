import { Link } from "react-router-dom"

export default  function Header  ()  {
    const Logo = <img src="/images/Logo.png" alt="logo" className=" w-[3%] h-[3%] max-h-[50px]  max-w-[45px]"/>
    return (
            <header className="max-h-[9px] w-full">
                <nav className="sm:flex hidden justify-between items-center  bg-[#203844] w-full p-2">
                       {Logo}
                       <div className="menu block md:w-auto text-[#C2B287] space-x-5" id="navbar">
                            <Link to="../Pages/HomePage" >Home</Link>
                            <Link to="../Pages/AboutPage" > About </Link>
                            <Link to="../Pages/ContactPage" > Contact </Link>
                            <Link to="../Pages/ProfilPage" > Profile </Link>
                            <Link to="../Pages/RegisterPage" > Register </Link>
                       </div>
                </nav>
            </header>
    )
}