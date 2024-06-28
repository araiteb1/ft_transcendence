import {IconChatbox, IconGameController, IconHome4Fill, IconLogin, IconNotifications, IconPersonSharp, IconSearch2Fill, IconSettings} from "../icons/Icons"
import {Link } from "react-router-dom"
export default function HomePage ()  {
    return (
        <main className="flex flex-col h-full w-full">

            <div className=" flex justify-center items-center border border-TextColor1 w-full h-[4%]  bg-SubMain ">
                <div className="flex   border justify-around h-[65%] w-[25%] border-SubMain rounded-full hover:bg-extraColor 
                        hover:shadow-lg hover:justify-end">
                    <IconSearch2Fill />
                </div>
                <div className="flex  absolute  right-2 ">
                    <IconNotifications />
                </div>
            </div>
            <div className=" flex flex-col border justify-start border-TextColor1 w-[130px] h-full rounded-tr-full bg-SubMain absolute  lift-0 max-w-14">
                <div className="flex flex-col justify-between items-center absolute top-[13%] space-y-10 ">
                    <IconHome4Fill />
                    <IconPersonSharp />
                    <IconChatbox />
                    <IconGameController />
                </div>
                <div className="flex flex-col justify-between items-center absolute top-[80%] space-y-10">
                    <IconLogin />
                    <IconSettings />
                </div>
            </div>
            <img src="/images/img1.png"  className="w-full h-[40%]"/>
        </main>
    );
}