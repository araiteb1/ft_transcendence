import { Link } from "react-router-dom";
import Navbarp from "../Components/Navbarp";

export default function ProfilPage ()  {
    return (
        <div className=" flex flex-col items-center   w-[100%] space-y-2">
            <Navbarp />
            <span className=" flex flex-col  w-[100%]">
                <div className=" flex flex-col items-center  w-[100%]">
                    <div className=" flex justify-center items-center menu   border 
                                        border-TextColor2 bg-SubMain w-[80%] h-[90px] rounded-3xl 
                                        space-x-8 text-[30px] text-TextColor1">
                        <Link to="../Pages/HomePage" > OverVieW </Link>
                        <Link to="../Pages/AboutPage" > Avievement </Link>
                        <Link to="../Pages/AboutPage" > Match History </Link>
                        <Link to="../Pages/ContactPage" > Rank </Link>
                        <Link to="../Pages/ProfilPage" > Stats </Link>
                    </div>
                    <div  className="flex flex-col items-center"
                        style={{
                            backgroundImage: `url(${`/images/fan.png`})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize:"contain",
                            width:"2000px",
                            height:"700px"
                        }}>
                        <div className=" border border-Component1 bg-SubMain w-[300px] h-[750px] rounded-b-full m-9">
                                   fghjkghj
                        </div>
                        </div>
                </div>
            </span>
        </div>
    );
}