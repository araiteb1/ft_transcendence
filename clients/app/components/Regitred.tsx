import {EmailIcon}from "../icons/Icons";

const Regitred = () => {
    return (
        <div className="flex  m-[15%]  relative  border-[#C2B287] bg-[#203844] border-2 w-[75%] h-[60%] rounded-lg">
          
          <div className=" border  bg-[#C2B287] w-[20px] h-[150px] rounded-lg  ">
          </div>
            <div className="  flex  absolute inset-x-5 top-[10%] text-[#FFFFFF] w-[45%] h-[80%] ">
                  <h1 className=" text-center text-[32px] absolute left-[30%]">Continue With</h1>
                    <button className=" items-center absolute inset-x-40 top-[15%] flex border w-[40px] h-[40px] bg-[#ffffff]">
                      <EmailIcon />
                    </button>
                    <button className=" absolute inset-x-80 top-[15%] flex border w-[40px] h-[40px] bg-[#ffffff] rounded-full">
                      <p className=" text-[#181818]  items-center text-[30px] t">42</p>
                    </button>
                  <h2 className="absolute inset-x-44 top-[25%] text-center text-[32px] self-center left-[30%]"> Or</h2>
                  <div className=" absolute inset-x-20 top-[40%] border bg-MainButon w-[60%] h-[8%] self-center rounded-3xl text-[#181818] m-2">
                    <p className="m-2">email</p>
                    </div>
                  <div className="absolute inset-x-20 top-[53%] border bg-MainButon w-[60%] h-[8%] self-center rounded-3xl  text-[#181818] m-2">
                    <p className="m-2">password</p></div>
            </div> 
          <div className=" border absolute inset-y-0 left-[50%] border-[#C2B287] w-[2px] h-full">
          </div>
          <div className="flex-col w-[45%] h-[full] absolute inset-y-0 right-5 top-[25%] items-center justify-center">
              <p className="text-[#FFFFFF] text-[40px] text-center "> Don't have an account ?</p>
              <button className="px-12 py-5 w-full sm:w-fit rounded-lg bg-[#553D1E] text-[25px] m-20">Sing Up</button>
          </div>
          <div className=" border absolute inset-y-0 right-0 flex-col bg-[#C2B287]  w-[20px] h-[150px] rounded-lg">
          </div>
        </div>
    );
}
export default Regitred;