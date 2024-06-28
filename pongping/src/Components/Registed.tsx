import { EmailIcon }from "../icons/Icons";
import React, { useState, useEffect } from 'react';

import {Link} from "react-router-dom";

const Regitred: React.FC = () => {
  const playerWidth = 20; // Width of the player div
  const playerHeight = 150; // Height of the player div
  const boardWidth = 800; // Width of the board div
  const boardHeight = 800; // Height of the board div
  const ballSize = 30; // Size of the ball
  const maxBallPositionX = boardWidth - ballSize; // Max horizontal position of the ball
  const maxBallPositionY = boardHeight - (2 * ballSize); // Max vertical position of the ball

  const [player1Position, setPlayer1Position] = useState<number>(boardWidth - playerHeight); // Start at the far right
  const [player2Position, setPlayer2Position] = useState<number>(0); // Start at the far left
  const [player1Direction, setPlayer1Direction] = useState<string>('left'); // Move left initially
  const [player2Direction, setPlayer2Direction] = useState<string>('right'); // Move right initially

  const [ballPositionX, setBallPositionX] = useState<number>(maxBallPositionX / 2); // Start in the middle horizontally
  const [ballPositionY, setBallPositionY] = useState<number>(boardHeight / 2); // Start in the middle vertically
  const [ballDirectionX, setBallDirectionX] = useState<string>('right'); // Initial horizontal direction
  const [ballDirectionY, setBallDirectionY] = useState<string>('down'); // Initial vertical direction

  useEffect(() => {
    const interval1 = setInterval(() => {
      setPlayer1Position((prevPosition) => {
        const newPosition = player1Direction === 'left' ? prevPosition - 10 : prevPosition + 10;
        if (newPosition <= 0) {
          setPlayer1Direction('right');
        } else if (newPosition >= boardHeight - playerHeight) {
          setPlayer1Direction('left');
        }
        return Math.max(0, Math.min(boardHeight - playerHeight, newPosition));
      });
    }, 100);

    const interval2 = setInterval(() => {
      setPlayer2Position((prevPosition) => {
        const newPosition = player2Direction === 'right' ? prevPosition + 10 : prevPosition - 10;
        if (newPosition >= boardHeight - playerHeight) {
          setPlayer2Direction('left');
        } else if (newPosition <= 0) {
          setPlayer2Direction('right');
        }
        return Math.max(0, Math.min(boardHeight - playerHeight, newPosition));
      });
    }, 100);

    const ballInterval = setInterval(() => {
      setBallPositionX((prevPositionX) => {
        const newPositionX = ballDirectionX === 'right' ? prevPositionX + 10 : prevPositionX - 10;
        if (newPositionX <= 0) {
          setBallDirectionX('right');
        } else if (newPositionX >= maxBallPositionX) {
          setBallDirectionX('left');
        }
        return Math.max(0, Math.min(maxBallPositionX, newPositionX));
      });

      setBallPositionY((prevPositionY) => {
        const newPositionY = ballDirectionY === 'down' ? prevPositionY + 10 : prevPositionY - 10;

        // Check collision with player1 (bottom player)
        if (newPositionY >= boardHeight - playerHeight - ballSize && newPositionY >= player1Position && newPositionY <= player1Position + playerHeight) {
          setBallDirectionY('up');
        } else if (newPositionY >= maxBallPositionY) {
          setBallDirectionY('up');
        }

        // Check collision with player2 (top player)
        if (newPositionY <= playerHeight && newPositionY >= player2Position && newPositionY <= player2Position + playerHeight) {
          setBallDirectionY('down');
        } else if (newPositionY <= 0) {
          setBallDirectionY('down');
        }

        return Math.max(0, Math.min(maxBallPositionY, newPositionY));
      });
    }, 50);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(ballInterval);
    };
  }, [player1Direction, player2Direction, ballDirectionX, ballDirectionY]);



  const [email,setEmail] =useState('')
  const [password,setPwd] =useState('')

    return (

      
        <div className="flex flex-col m-[15%]  relative  border-[#C2B287] bg-[#203844] border-2 w-[75%] h-[50%] rounded-3xl">
          <div className=" border  bg-[#C2B287] w-[2.2%] h-[150px] rounded-lg  " 
          style={{ transform: `translateY(${player1Position}px)` }}
          ></div>
            <div className="  flex  flex-col items-center   text-[#FFFFFF] w-[45%] h-[30%] text-[32px]">
                  <form className="flex flex-col items-center">
                    <h1>Continue With</h1>
                    <div className="flex justify-between p-5 space-x-3">

                          <button className=" border w-[40px] h-[40px] bg-[#ffffff]">
                            <EmailIcon />
                          </button>
                          <p> Or </p>
                            <button className=" border w-[40px] h-[40px] bg-[#ffffff] rounded-full ">
                              <p className=" text-[#181818]  ">42</p>
                            </button>
                      
                    </div>
                    <div className="flex flex-col items-center text-[#181818] space-y-3 text-[24px] ">
                        <input 
                        
                              type="email" 
                              onChange={(e) => {setEmail(e.target.value)}} 
                              placeholder="Email" 
                              name="" 
                              id="" 
                              className="  border bg-MainButon   rounded-3xl pl-2"
                              />

                          <input 
                              type="password"
                              onChange={(e) => {setPwd(e.target.value)}} 
                              placeholder="Password" 
                              name="" 
                              id=""
                              className=" border bg-MainButon rounded-3xl  pl-2" 
                              />

                            <Link to="../Pages/HomePage"><button className=" px-7 py-3 w-full sm:w-fit rounded-lg bg-[#553D1E] text-[18px]  hover:bg-Component1 hover:text-extraColor" >submit</button></Link>

                    </div>
                    </form>
            </div> 
          <div className=" border absolute inset-y-0 left-[50%] border-[#C2B287] w-[2px] h-full"></div>
          <div className="flex flex-col w-[45%] h-[full] absolute inset-y-0 right-5  items-center justify-center">
              <p className="text-[#FFFFFF] text-[40px] text-center "> Don't have an account ?</p>
              <Link to="../Pages/SingUpPage" ><button className="px-12 py-5 w-full sm:w-fit rounded-lg bg-[#553D1E] text-[25px] m-20  hover:bg-Component1 hover:text-extraColor">Sing Up</button></Link>
          </div>
            <div
              className="border ball bg-[#553D1E] w-[30px] h-[30px] rounded-full"
              style={{ transform: `translate(${ballPositionX}px, ${ballPositionY}px)` }}
            ></div>
            <div 
            className=" border absolute inset-y-0 right-0 flex-col bg-[#C2B287]  w-[20px] h-[150px] rounded-lg"
            style={{ transform: `translatey(${player2Position}px)` }}
            ></div>
        </div>
    );
};
export default Regitred;