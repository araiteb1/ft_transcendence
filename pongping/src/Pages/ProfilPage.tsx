import { Link } from "react-router-dom";
import Navbarp from "../Components/Navbarp";

export default function ProfilPage ()  {
    return (
        <div className=" flex flex-col items-center   w-[100%] space-y-2">
            <Navbarp />
            <span className=" flex flex-col  w-[80%] h-full">
                <div className=" flex flex-col items-start w-[100%]">
                    <div className=" flex justify-center items-center menu   border 
                                        border-TextColor2 bg-SubMain w-[80%] h-[90px] rounded-3xl 
                                        space-x-8 text-[30px] text-TextColor1">
                        <Link to="../Components/OverVieW" > OverVieW </Link>
                        <Link to="../Components/Avievement" > Avievement </Link>
                        <Link to="../Components/ MatchHistory" > Match History </Link>
                        <Link to="../Components/Rank" > Rank </Link>
                        <Link to="../Components/Stats" > Stats </Link>
                    </div>
                    <div  className="flex flex-col "
                        style={{
                            backgroundImage: `url(${`/images/fan.png`})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize:"contain",
                            maxWidth:"1800px",
                            width:"1100px",
                            height:"1500px"
                        }}>
                        <div className=" border border-Component1 bg-SubMain w-[250px] h-[650px] rounded-b-full m-9">
                        </div>
                        </div>
                </div>
                <div className=" flex items-end border border-Component1 w-[60px] h-[300px] bg-BackGround text-[#ffffff] text-[24px]">
                                erghjklghjko ftghuji ygou bh 
                </div>
            </span>
        </div>
    );
}