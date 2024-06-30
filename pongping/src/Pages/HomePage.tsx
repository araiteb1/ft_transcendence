import Navbarp from "../Components/Navbarp";

export default function HomePage ()  {
    return (
        <div className="flex flex-col items-center justify-center w-full space-y-1">
            <Navbarp />
            <div className="flex flex-col items-center"
                style={{
                    backgroundImage: `url(${'/images/img1.png'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:"cover",
                    maxWidth:"1800px",
                    maxHeight:"1000px",
                    width:"1270px",
                    height:"600px",
                    minWidth:"100px",
                    minHeight:"100px"
            }} >
                <div className=" flex self-center broder border-TextColor1 w-[90%] h-[10%]  bg-SubMain rounded-full">
                    <img src="/images/Logo.png " width={30} height={50} className=" m-2 pl-1 "></img>
                </div>
            </div>
        </div>
    );
}