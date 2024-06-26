import Board from "../components/Board";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div className="flex relative justify-around m-2 items-center w-full h-[100%] space-x-4  text-TextColor1 min-h-screen">
            <Board />
                <p className="text-[42px] m-2 text-center">Experience it as a professional dominate the field 
                <br></br>
                    <Link href="../page/RegisterPage"><button className= "px-12 py-4 w-full sm:w-fit  inset-y-5 rounded-lg mr-7 bg-[#553D1E]">Play</button></Link>
                </p>

        </div>
    );
}
export default LandingPage;