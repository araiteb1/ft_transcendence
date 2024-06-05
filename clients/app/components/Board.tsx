"use client";
import React, { useState, useEffect } from 'react';

const Board: React.FC = () => {
  const playerWidth = 150; // Width of the player div
  const boardWidth = 400; // Width of the board div
  const maxPosition = boardWidth - playerWidth - playerWidth; // Max position considering the player width

  const [player1Position, setPlayer1Position] = useState<number>(-100); // Start at the far right
  const [player2Position, setPlayer2Position] = useState<number>(maxPosition); // Start at the far left
  const [player1Direction, setPlayer1Direction] = useState<string>('left'); // Move left initially
  const [player2Direction, setPlayer2Direction] = useState<string>('right'); // Move right initially

  useEffect(() => {
    const interval1 = setInterval(() => {
      setPlayer1Position((prevPosition) => {
        const newPosition = player1Direction === 'left' ? prevPosition - 5 : prevPosition + 5;
        if (newPosition <= 0) {
          setPlayer1Direction('right');
        } else if (newPosition >= maxPosition ) {
          setPlayer1Direction('left');
        }
        return Math.max(0, Math.min(maxPosition, newPosition));
      });
    }, 100);

    const interval2 = setInterval(() => {
      setPlayer2Position((prevPosition) => {
        const newPosition = player2Direction === 'right' ? prevPosition + 5 : prevPosition - 5;
        if (newPosition >= maxPosition) {
          setPlayer2Direction('left');
        } else if (newPosition <= 0) {
          setPlayer2Direction('right');
        }
        return Math.max(0, Math.min(maxPosition, newPosition));
      });
    }, 100);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [player1Direction, player2Direction]);

  return (
    <div className="flex flex-col board justify-between items-center border-[#553D1E] border-2 rounded-2xl w-[400px] h-[600px] bg-[#CAD2C5] pt-1">
      <div
        className="border player player2 bg-[#553D1E] w-[150px] h-[20px] rounded-lg"
        style={{ transform: `translateX(${player1Position}px)` }}
      ></div>
      <div className="border ball bg-[#553D1E] w-[30px] h-[30px] rounded-full"></div>
      <div
        className="border player player1 bg-[#553D1E] w-[150px] h-[20px] rounded-lg mb-1"
        style={{ transform: `translateX(${player2Position}px)` }}
      ></div>
    </div>
  );
};

export default Board;
