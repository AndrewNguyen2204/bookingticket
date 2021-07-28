import { userService } from "../../services/UserService";
import { STATUS } from "../../util/settings/config";
import { LOG_IN } from "../types/UserType";
import {history} from '../../App';

// Normal Actions
export const setUser = (userLogin) => ({
    type: LOG_IN,
    userLogin
})



// Thunk Actions



export const loginAction = (user) => {



    return async (dispatch) => {

        try {
            const result = await userService.login(user);

            if (result.status === STATUS.SUCCESS) {

                dispatch(setUser(result.data.content));
                history.goBack();
            }

        } catch (error) {
            console.log(error);
        }

    }
}