import { Link } from "react-router-dom"
import Board from "../Components/Board";
import Header from "../Layout/Header";

export default function LandingPage() {
    return (
        <div className="h-full">
            <Header />
            <div className="flex relative justify-around items-center w-full h-[100%] 
            text-TextColor1 ">
                <Board />
                <div className="flex flex-col items-center">
                    <p className="lg:text-[42px] m-2 text-center">Experience it as a professional dominate the field </p>
                    <Link to= "../Pages/RegisterPage"><button className= "px-12 py-4 w-full sm:w-fit  inset-y-5 rounded-lg mr-7 bg-[#553D1E] hover:bg-Component1 hover:text-extraColor">
                            Play
                    </button></Link>

                </div>
            </div>

        </div>
    );
}