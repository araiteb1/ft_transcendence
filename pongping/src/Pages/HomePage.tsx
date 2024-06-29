import Navbarp from "../Components/Navbarp";

export default function HomePage ()  {
    return (
        <div className="flex flex-col w-full space-y-1">
            <Navbarp />
            <div className="flex flex-col items-center"
                style={{
                    backgroundImage: `url(${'/images/img1.png'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:"cover",
                    width:"2000px",
                    height:"700px"
            }} >
                <div className=" flex self-center broder border-TextColor1 w-[90%] h-[10%]  bg-SubMain rounded-full">
                    <img src="/images/Logo.png " width={30} height={50} className=" m-2 pl-1 "></img>
                </div>
            </div>
        </div>
    );
}