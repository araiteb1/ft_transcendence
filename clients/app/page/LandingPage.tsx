import Board from "../components/Board";

const LandingPage = () => {
    return (
        <div className="flex justify-around m-2 items-center w-full h-[100%] text-TextColor1">
            <Board />
            <p>Experience it as a professional dominate the field </p>
            <button className="px-12 py-5 w-full sm:w-fit rounded-lg mr-7 bg-[#553D1E]">Play</button>

        </div>
    );
}
export default LandingPage;