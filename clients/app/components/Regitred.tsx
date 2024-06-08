import {EmailIcon, SchoolIcon}from "../icons/Icons";

const Regitred = () => {
    return (
        <div className="flex  m-[15%]  relative  border-[#C2B287] bg-[#203844] border-2 w-[75%] h-[60%] rounded-lg">
          
          <div className=" border  bg-[#C2B287] w-[20px] h-[150px] rounded-lg  ">
          </div>
            <div className=" flex  absolute inset-x-5 top-[10%] text-[#FFFFFF] w-[45%] h-[80%] ">
                  <h1 className=" text-center text-[32px] absolute left-[30%]">Continue With</h1>
                  <button className=" flex border w-[40px] h-[40px] bg-[#ffffff]">
                      <EmailIcon />
                    </button>
                  
            </div> 
          <div className=" border absolute inset-y-0 left-[50%] border-[#C2B287] w-[2px] h-full">
          </div>
          <div className=" border absolute inset-y-0 right-0 flex-col bg-[#C2B287]  w-[20px] h-[150px] rounded-lg">

          </div>
        </div>
    );
}
export default Regitred;