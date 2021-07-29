import { userService } from "../../services/UserService";
import { STATUS } from "../../util/settings/config";
import { LOG_IN, SET_USER_PROFILE } from "../types/UserType";
import { history } from '../../App';
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

// Normal Actions
export const setUserAction = (userLogin) => ({
    type: LOG_IN,
    userLogin
})

export const setUserProfileAction = (userProfile) => ({
    type: SET_USER_PROFILE,
    userProfile
})

// Thunk Actions



export const loginAction = (user) => {



    return async (dispatch) => {

        try {
            const result = await userService.login(user);

            if (result.status === STATUS.SUCCESS) {

                dispatch(setUserAction(result.data.content));
                history.goBack();
            }

        } catch (err) {
            console.log('error', err);
        }

    }
}

export const getUserProfileAction = () => {




    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction());
            const result = await userService.getProfile();

            if (result.status === STATUS.SUCCESS) {
                await dispatch(setUserProfileAction(result.data.content));
                dispatch(hideLoadingAction());
            }

        } catch (err) {
            console.log('error', err);
            dispatch(hideLoadingAction());
        }
    }
}