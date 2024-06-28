import React, { useRef,useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import Header from '../Layout/Header';
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SingUpPage: React.FC = () => {

  const userRef = useRef<HTMLLinkElement>(null);
  const errRef = useRef();
  const [user, setUser] = useState('');
  const [validFName, setValidFName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);


  const [lName, setlName] = useState('');
  const [validlName, setValidlName] = useState(false);
  const [lNameFocus, setlNameFocus] = useState(false);


  const [Email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [EmailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);


  const [matchpwd, setMatchPwd] = useState('');
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchpwdFocus, setMatchPwdFocus] = useState(false);


  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const playerWidth = 20; // Width of the player div
  const playerHeight = 120; // Height of the player div
  const boardWidth = 400; // Width of the board div
  const boardHeight = 900; // Height of the board div
  const ballSize = 30; // Size of the ball
  const maxBallPositionX = boardWidth - ballSize; // Max horizontal position of the ball
  const maxBallPositionY = boardHeight - (2.1 * ballSize); // Max vertical position of the ball

  const [player1Position, setPlayer1Position] = useState<number>(boardWidth - playerWidth); // Start at the far right
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
        } else if (newPosition >= boardWidth - playerWidth) {
          setPlayer1Direction('left');
        }
        return Math.max(0, Math.min(boardWidth - playerWidth, newPosition));
      });
    }, 100);

    const interval2 = setInterval(() => {
      setPlayer2Position((prevPosition) => {
        const newPosition = player2Direction === 'right' ? prevPosition + 10 : prevPosition - 10;
        if (newPosition >= boardWidth - playerWidth) {
          setPlayer2Direction('left');
        } else if (newPosition <= 0) {
          setPlayer2Direction('right');
        }
        return Math.max(0, Math.min(boardWidth - playerWidth, newPosition));
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
        if (newPositionY >= boardHeight - playerHeight - ballSize && newPositionY >= player1Position && newPositionY <= player1Position + playerWidth) {
          setBallDirectionY('up');
        } else if (newPositionY >= maxBallPositionY) {
          setBallDirectionY('up');
        }

        // Check collision with player2 (top player)
        if (newPositionY <= playerHeight && newPositionY >= player2Position && newPositionY <= player2Position + playerWidth) {
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

  useEffect(() => {
    userRef.current?.focus();
  }, [])
  useEffect(()=>{
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidFName(result);
  }, [user])

  useEffect(()=> {
    const result =PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchpwd;
    setValidMatchPwd(match);
  }, [pwd, matchpwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchpwd])
  return (
    <div className='h-full'>
  <Header />
    <div className='relative h-full w-full grid grid-cols-3 gap-4 place-items-center min-h-screen'>
        <div className="flex absolute  flex-col board  border-Component1 border-2 rounded-2xl w-[45%] h-[70%] bg-[#203844] pt-1 self-center">
          <div
            className="border player player1 bg-Component1 w-[32%] h-[2%] rounded-lg"
            style={{ transform: `translateX(${player1Position}px)` }}
          ></div>
          <div className=' w-[100%] h-[45%] grid place-items-center'>
                    <input 
                             className=' pl-4 border border-Component0 bg-MainButon w-[70%] h-[35%] text-BackGround rounded-3xl '
                                    type="text"
                                    placeholder="First Name"
                                    id="username"
                                    // ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                    aria-invalid={validFName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus= {() => setUserFocus(true)}
                                    onBlur= {()=> setUserFocus(false)}
                                    />

            
                    <input 
                        type="Last Name " 
                        defaultValue='Last Name' 
                        className=' pl-4 border border-Component0 bg-MainButon w-[70%] h-[35%] text-BackGround rounded-3xl '
                        />
                    <input 
                        type="Email" 
                        defaultValue='Email' 
                        className=' pl-4 border border-Component0 bg-MainButon w-[70%] h-[35%] text-BackGround rounded-3xl 
                    '/>
          </div>
          <div className=' flex absolute inset-x-0 top-[50%] self-center self-ceenter border border-Component1 h-[2px]'>
          </div>
          <div
            className="border ball bg-Component1 w-[30px] h-[30px] rounded-full"
            style={{ transform: `translate(${ballPositionY}px, ${ballPositionX}px)` }}
          ></div>
           <div className=' w-[100%] h-[45%] grid place-items-center'>
                <input
                     type="passoword" 
                     defaultValue='passoword'
                     className=' pl-4 border border-Component0 bg-MainButon w-[70%] h-[35%] text-BackGround rounded-3xl '
                      />
               <input 
                    type="re-password"
                     defaultValue='re-password'
                     className=' pl-4 border border-Component0 bg-MainButon w-[70%] h-[35%] text-BackGround rounded-3xl '/>
                
                <Link to="../Pages/RegisterPage">
                  <button className="px-12 py-5 w-full sm:w-fit  mr-7 bg-[#553D1E] rounded-3xl text-[20px]  hover:bg-Component1 hover:text-extraColor">
                    Sing Up
                  </button>
                </Link>
          </div>
          <div
            className="border player player2 absolute inset-x-0 bottom-0 bg-Component1 w-[32%] h-[2%] rounded-lg mb-1"
            style={{ transform: `translateX(${player2Position}px)` }}
          ></div>
    </div>
    </div>
    </div>
  );
};

export default SingUpPage;