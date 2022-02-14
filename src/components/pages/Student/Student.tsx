import { useReducer } from "react";
import { reducer } from "../../../reducers/student-reducer";
import { ShowAction } from "../../../actions/student-actions";
import { studentsArray } from "../../../reducers/student-reducer";
import IUser from "../../../models/IUser.interface";

const Student = () => {
    const [students, dispatch] = useReducer(reducer, [])

    const SendDispatch = (): void => {
        dispatch(ShowAction(studentsArray));
    }

    return (
        <div className="main">
            <h1>Student</h1>
            <button onClick={SendDispatch}>DISPATCH</button>
            {
                students ? (
                    students.map((student: IUser, index: number) =>
                        <div key={index} className="student-box">
                            <h1>firstName: {student.firstName}</h1>
                            <h1>lastName: {student.lastName}</h1>
                            <h1>age: {student.age}</h1>
                        </div>
                    )
                ) : ""
            }
        </div>
    )
}

export default Student;