import { SHOW } from "../actions/student-types";
import IUser from "../models/IUser.interface"

export const studentsArray: IUser[] = [
    {
        firstName: "Leo",
        lastName: "Messi",
        age: 34
    },
    {
        firstName: "Cristiano",
        lastName: "Ronaldo",
        age: 38
    }
];

export const reducer = (state: any = {}, action: any): any => {
    switch (action.type) {
        case SHOW:
            return action.payload;

        default:
            return state;
    }
}