const Home = () => { 
    // let age: number = 23;                  //! 2
    // let firstName: string = "marcos";      //! 3
    // let isInClass: boolean = true;         //! 4
    // let grades: number[] = [85, 90, 100];  //! 5

    //!  6
    // const PopMsg = (): void => {
    //     alert("Welcome")
    // }

    //!  7
    // const PopInfo = (): void => {
    //     alert(`age: ${age}, firstName: ${firstName}, isInClass: ${isInClass}, grades: ${grades}`)
    // }

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
    // const IsNameTwiceInArray = (name: string, ...names: string[]): boolean => {
    //     let counter: number = 0;
    //     let i: number = 0;
    //     while (i < names.length) {
    //         if (names[i] === name) {
    //             counter++;
    //         }
    //         i++;
    //     }
    //     return counter > 1 ? true : false;
    // }
    // console.log(IsNameTwiceInArray("aa", "bb","cc","dd","aa","cc", "aa"));

    //!  16
    // const GetNamesInOrder = (grade?:number, ...names:string[]):string[] => {
    //     if (grade) {
    //         return names.sort();
    //     }
    //     return names.sort().reverse();
    // }
    // console.log(GetNamesInOrder(5, "oo", "zz", "dd", "bb", "aa", "cc"));

    //!  17
    // const GetRandomArrayIfNumExist = (num: number = -1):boolean => {
    //     const randomArr: number[] = [];
    //     for (let i = 0; i < 5; i++) {
    //         let newNum = Math.floor(Math.random() * 10);
    //         randomArr.push(newNum);
    //         if (num === newNum) {
    //            return true
    //         }
    //     }
    //     return  false;
    // }
    // console.log(GetRandomArrayIfNumExist(5));

    //!  18
    // type objParams = {
    //     firstName: string;
    //     age: number;
    // };

    // const PrintAllObjects = (...objects: objParams[]): void => {
    //     for (const obj of objects) {
    //         console.log(`name: ${obj.firstName} - age: ${obj.age}`);
    //     };
    // };
    // PrintAllObjects(
    //     { firstName: "aa", age: 10 },
    //     { firstName: "bb", age: 20 },
    //     { firstName: "cc", age: 30 }
    // );

    //!  19
    // type objectsParam = {
    //     firstName: string;
    //     grade: number;
    //     age: number
    // };

    // const GetOldestObj = (...objects: objectsParam[]): void => {
    //     let max:objectsParam = objects[0];
    //     for (const obj of objects) {
    //         if(obj.age > max.age) max = obj;
    //     }
    //     console.log(max);
    // }
    // GetOldestObj(
    //     { firstName: "aa", grade: 5, age: 26 },
    //     { firstName: "bb", grade: 12, age: 54 },
    //     { firstName: "cc", grade: 7, age: 34 },
    //     { firstName: "cc", grade: 7, age: 120 },
    //     { firstName: "cc", grade: 7, age: 85 }
    // );

    //!  20
    // type objectsParam = {
    //     name: string;
    //     grade: number;
    //     age: number
    // };

    // const IsNameInArray = (name: string, ...objects: objectsParam[]): boolean => {
    //     for (const obj of objects) {
    //         if (obj.name === name) return true;
    //     }
    //     return false;
    // }
    // console.log(IsNameInArray(
    //     "cc",
    //     { name: "aa", grade: 5, age: 26 },
    //     { name: "bb", grade: 12, age: 54 },
    //     { name: "cc", grade: 7, age: 34 },
    //     { name: "zz", grade: 7, age: 120 },
    //     { name: "kk", grade: 7, age: 85 }
    // ));





    return (
        <>
            <h1>Home</h1>
            {/* <p>age: {age}</p>
            <p>firstName: {firstName}</p>
            <p>isInClass: {isInClass}</p>
            <p>grades: {grades}</p>
            <button onClick={PopMsg}>Alert Welcome</button>
        <button onClick={PopInfo}>Alert Info</button> */}
        </>
    )
}

export default Home;