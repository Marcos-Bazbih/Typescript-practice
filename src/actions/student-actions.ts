import { SHOW } from "./student-types";

export const ShowAction = (value:any) => {
    return {
        type: SHOW,
        payload: value
    }
}