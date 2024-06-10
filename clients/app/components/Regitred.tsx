"use client";
import {EmailIcon}from "../icons/Icons";
import React, { useState, useEffect } from 'react';


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



    return (
      
        <div className="flex  m-[15%]  relative  border-[#C2B287] bg-[#203844] border-2 w-[75%] h-[60%] rounded-3xl">
          
          <div className=" border  bg-[#C2B287] w-[20px] h-[150px] rounded-lg  " 
          style={{ transform: `translateY(${player1Position}px)` }}
          ></div>
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
          <div className=" border absolute inset-y-0 left-[50%] border-[#C2B287] w-[2px] h-full"></div>
          <div className="flex-col w-[45%] h-[full] absolute inset-y-0 right-5 top-[25%] items-center justify-center">
              <p className="text-[#FFFFFF] text-[40px] text-center "> Don't have an account ?</p>
              <button className="px-12 py-5 w-full sm:w-fit rounded-lg bg-[#553D1E] text-[25px] m-20">Sing Up</button>
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