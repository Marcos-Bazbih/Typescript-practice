const Lotto = () => {

    const IsNumberRepeated = (array: number[], userNum: number): boolean => {
        for (const num of array) {
            if (userNum === num) return true;
        }
        return false;
    }

    const IsNumberValid = (num: number): boolean => {
        return num >= 1 && num <= 100 ? true : false;
    }

    const GetTenNumbers = (): void => {
        let userName: any = prompt("enter your name");
        let userArray: number[] = [];
        let i: number = 0;
        while (i < 10) {
            let userNum: number = Number(prompt(`${i + 1} - Enter a number`));
            if (!IsNumberRepeated(userArray, userNum) && IsNumberValid(userNum)) {
                userArray.push(userNum);
                i++;
            }
        }
        console.log(userArray);
        GetFiftyNumbers(userArray);
    }

    const GetFiftyNumbers = (userArray: number[]): void => {
        let i: number = 0;
        let lottoArray: number[] = [];

        while (i < 50) {
            let randomNum = Math.floor(Math.random() * 100);
            if (!IsNumberRepeated(lottoArray, randomNum)) {
                lottoArray.push(randomNum);
                i++;
            }
        }
        console.log(lottoArray);
        CheckLotto(userArray, lottoArray);
    }

    const CheckLotto = (userArray: number[], lottoArray: number[]) => {
        let counter: number = 0;
        for (const lottoNum of lottoArray) {
            for (const userNum of userArray) {
                if (userNum === lottoNum) {
                    counter++;
                    break;
                }
            }
        }
        alert(`${counter} - numbers are correct`)
    }



    return (
        <>
            <h1>Lotto</h1>
            <button onClick={GetTenNumbers}>Click</button>
        </>
    )
}

export default Lotto; 