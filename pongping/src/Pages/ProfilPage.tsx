import { Link } from "react-router-dom";
import Navbarp from "../Components/Navbarp";

export default function ProfilPage ()  {
    return (
        <div className=" flex flex-col items-center   w-[100%] h-full space-y-2">
            <Navbarp />
            <span className=" flex  w-[80%] h-full min-w-[120px] ">
                    <div className=" flex flex-col items-start w-[100%]">
                        <div className=" flex justify-center items-center menu   border 
                                            border-TextColor2 bg-SubMain w-[86%] h-[90px] rounded-3xl 
                                            space-x-8 text-[22px] text-TextColor1">
                            <Link to="../Components/OverVieW" > OverVieW </Link>
                            <Link to="../Components/Avievement" > Avievement </Link>
                            <Link to="../Components/MatchHistory" > Match History </Link>
                            <Link to="../Components/Rank" > Rank </Link>
                            <Link to="../Components/Stats" > Stats </Link>
                        </div>
                        <div  className="flex flex-col min-w-[120px]"
                            style={{
                                backgroundImage: `url(${`/images/fan.png`})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize:"contain",
                                maxWidth:"1800px",
                                maxHeight:"1000px",
                                width:"1100px",
                
                                minWidth:"100px",
                                minHeight:"100px"
                            }}>
                                <form className=" flex justify-between  ">
                                    <div className=" border border-Component1 bg-SubMain w-[250px] h-[650px] rounded-b-full m-9">
                                    </div>
                                        <div className=" flex self-end  border  border-Component1 w-[160px] h-full bg-[#262A2D]  text-[24px]">
                                            <div className="flex items-center justify-center border border-extraColor w-[70px] h-[70px] rounded-full m-1">
                                                <div className="flex  border border-extraColor w-[64px] h-[64px] rounded-full ">
                                                    <img />
                                                </div>
                                            </div>
                                            <div className="flex border bg-[#262A2D] w-[158px] h-[2px] absolute top-[17%]"></div>
                                        </div>

                                </form>
                         </div>
                            </div>
                </span>
        </div>
    );
}