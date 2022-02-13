const Home = () => {
    let age: number = 23;
    let firstName: string = "marcos";
    let isInClass: boolean = true;
    let grades: number[] = [85, 90, 100];

    const PopMsg = (): void => {
        alert("Welcome")
    }

    const PopInfo = (): void => {
        alert(`age: ${age}, firstName: ${firstName}, isInClass: ${isInClass}, grades: ${grades}`)
    }

    //!  8
    // const CheckNameLength = (fName: string): boolean => {
    //     return fName.length > 4 ? true : false
    // }
    // console.log(CheckNameLength(firstName));

    //!  9
    // const CheckAge = (name: string, age: number): any => {
    //     return age > 15 ? name : "Wrong class";
    // }
    // console.log(CheckAge("as", 18));

    //!  10
    // const PrintAllInfo = (fName: string, lName: string, age: number = 0): string => {
    //     return `first name: ${fName}, last name: ${lName}, age: ${age}`;
    // }
    // console.log(PrintAllInfo("marcos","bazbih",23));

    //!  11
    // const PrintALlName = (teacherName: string, ...studentsNames:string[]): void => {
    //     console.log(studentsNames);
    // }
    // PrintALlName("teacher", "stu1", "stu2", "stu3");

    //!  12
    // const PrintAfterLastNameCheck = (fName: string, lName?: string, grade:number=60, ...friendsList:string[]):void => {
    //     let userInfo :string = `fName: ${fName}, lName: ${lName}, grade: ${grade},\n friendsList: ${friendsList}`;
    //     lName ? console.log(userInfo) : alert(userInfo)
    // }
    // PrintAfterLastNameCheck("bob", "marly",65,"a","b","c")

    //!  13
    // const PrintMaxNumber = (...numbers: number[]): number => {
    //     return Math.max(...numbers)
    // }
    // console.log(PrintMaxNumber(12, 2, 5, 3, 4, 10, 8));

    //!  14
    // const PrintMinNumber = (name: string, ...numbers: number[]):string => {
    //     return `name: ${name}, min: ${Math.min(...numbers)}`
    // }
    // console.log(PrintMinNumber("marcos",12, 2, 5, 3, 4, 10, 8));

    //!  15
    const IsNameTwiceInArray = (name: string, ...names: string[]): boolean => {
        let counter: number = 0;
        let i: number = 0;
        while (i < names.length) {
            if (names[i] === name) {
                counter++;
            }
            i++;
        }
        return counter > 1 ? true : false;
    }
    console.log(IsNameTwiceInArray("aa", "bb","cc","dd","aa","cc", "aa"));
    
    //!  16

    
    return (
        <div>
            <h1>Home</h1>
            <p>age: {age}</p>
            <p>firstName: {firstName}</p>
            <p>isInClass: {isInClass}</p>
            <p>grades: {grades}</p>
            <button onClick={PopMsg}>Alert Welcome</button>
            <button onClick={PopInfo}>Alert Info</button>
        </div>
    )
}

export default Home;