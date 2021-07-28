import { USER_LOGIN, TOKEN } from "../../util/settings/config";
import { LOG_IN } from "../types/UserType";

let userDefault = {};

if (localStorage.getItem(USER_LOGIN)) {
    userDefault = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const initialState = {
    userLogin: userDefault
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOG_IN: {
            const { userLogin } = action;
           
            localStorage.setItem(USER_LOGIN, JSON.stringify(userLogin));
            localStorage.setItem(TOKEN, userLogin.accessToken);

            return { ...state, userLogin: userLogin }
        }

        default:
            return { ...state }
    }
}


export default UserReducer;