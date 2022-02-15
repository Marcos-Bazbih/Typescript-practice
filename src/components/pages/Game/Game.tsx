// import { useState } from "react";
const Game = () => {
    // const [numbers, setNumbers]: any = useState([]);
    //!  21
    // const PrintMaxAndMinNum = (userNum: number): void => {
    //     let min: number = userNum;
    //     let max: number = userNum;

    //     while (userNum !== 0) {
    //         userNum = Number(prompt("enter a number"));
    //         if(userNum < min) min = userNum
    //         if(userNum > max) max = userNum
    //     }
    //     console.log(max, min);
    // }

    //!  22
    // const GetEvenArray = ():number[] => {
    //     let i: number = 0;
    //     let evenNumbers: number[] = [];

    //     while (i < 5) {
    //         let userNum = Number(prompt("enter a number"));
    //         numbers.push(userNum);
    //         if(userNum % 2 === 0) evenNumbers.push(userNum);
    //         i++;
    //     }
    //     setNumbers([...numbers])
    //     console.log(numbers);
    //     console.log(evenNumbers);
    //     return evenNumbers;
    // }

    //!  23
    // const IsNumInRandomArray = (userNum: number):void => {
    //     let randomArr: number[] = [];
    //     for (let i = 0; i < 10; i++) {
    //         randomArr.push(Math.floor(Math.random() * 10));
    //         if (userNum === randomArr[i]) console.log(`${userNum} in the array`);
    //         break;
    //     }
    //     console.log(`${userNum} not in the array`)
    // }

    //!  24
    // const GetNameFirstLetter = (fName: string): void => {
    //     if (fName[0] === "a") console.log("NICE")
    //     else if (fName[0] === "z") console.log("GOOD")
    //     else console.log(`${fName} start with ${fName[0]}`);
    // }

    //!  25
    // let i:number = 0;
    // const FizzBuzz = (): void => {
    //     while(i<100){
    //         if (i % 3 === 0) console.log(`${i} - fizz`);
    //         if (i % 5 === 0) console.log(`${i} - buzz`);
    //         if (i % 3 === 0 && i % 5 === 0) console.log(`${i} - fizzbuzz`);
    //         i++;
    //         FizzBuzz();
    //     }
    // }



    return (
        <>
            <h1>Game</h1>
            {/* <button onClick={()=>{PrintMaxAndMinNum(Number(prompt("enter a number")))}}>CLick</button> */}
            {/* <button onClick={GetEvenArray}>CLick</button> */}
            {/* <button onClick={()=>IsNumInRandomArray(4)}>CLick</button> */}
            {/* <button onClick={() => GetNameFirstLetter("zz")}>Click</button> */}
            {/* <button onClick={() => FizzBuzz()}>Click</button> */}
            {/* <h1>Game</h1>
            {
                numbers.map((num: number, i: number) =>
                <h1 key={i}>{num}</h1>
                )
            } */}
        </>
    )
}

export default Game;