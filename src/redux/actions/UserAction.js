import { userService } from "../../services/UserService";
import { STATUS } from "../../util/settings/config";
import { LOG_IN, SET_USER_PROFILE, SET_USERS, SET_USER_EDIT } from "../types/UserType";
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

export const setUsersAction = (users) => ({
    type: SET_USERS,
    users
})

export const setUserEditAction = (userEdit) => ({
    type: SET_USER_EDIT,
    userEdit
})
// Thunk Actions



export const loginAction = (user) => {



    return async (dispatch) => {

        try {
            const result = await userService.login(user);

            if (result.status === STATUS.SUCCESS) {

                dispatch(setUserAction(result.data.content));

                if (history.location.pathname !== '/register') {
                    history.goBack();
                }

            }

        } catch (err) {
            console.log('error', err);
            alert('account or password is incorrect !');
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
            console.log('error', err.response?.data);
            dispatch(hideLoadingAction());
        }
    }
}


export const signupAction = (user) => {


    return async (dispatch) => {


        try {
            const result = await userService.signup(user);

            if (result.status === STATUS.SUCCESS) {

                await dispatch(loginAction(result.data.content));
                history.push('/home');
            }

        } catch (err) {
            console.log('error', err.response?.data);
        }

    }
}

export const getUsersAction = () => {

    return async (dispatch) => {


        try {
            const result = await userService.getUsers();

            if (result.status === STATUS.SUCCESS) {

                dispatch(setUsersAction(result.data.content));

            }

        } catch (err) {
            console.log('error', err.response?.data);
        }

    }
}


export const updateUserAction = (user) => {

    return async (dispatch) => {


        try {
            const result = await userService.updateUser(user);

            if (result.status === STATUS.SUCCESS) {

                alert('update success');

                dispatch(getUserProfileAction());
            }

        } catch (err) {
            alert('Failed');
            console.log('error', err.response?.data);
        }

    }
}

export const editUserAction = (user) => {
    return async (dispatch) => {


        try {
            const result = await userService.editUser(user);

            if (result.status === STATUS.SUCCESS) {


                alert('success!');
                history.push('/dashboard/users');
            }

        } catch (err) {
            alert('Failed !');
            console.log('error', err.response?.data);
        }

    }
}



export const deleteUserAction = (account) => {

    return async (dispatch) => {


        try {
            const result = await userService.deleteUser(account);

            if (result.status === STATUS.SUCCESS) {

                alert(result.data.content);

            }

        } catch (err) {
            console.log('error', err.response?.data);
        }

    }
}

export const addUserAction = (user) => {

    return async (dispatch) => {
        try {
            const result = await userService.addUser(user);

            if (result.status === STATUS.SUCCESS) {
                alert('Success!')
                history.push('/dashboard/users');

            }

        } catch (err) {
            alert('Error!')
            console.log('error', err.response?.data);
        }


    }
}

export const getUserEditAction = (account) => {

    return async (dispatch) => {
        try {
            const result = await userService.searchUser(account);

            if (result.status === STATUS.SUCCESS) {


                dispatch(setUserEditAction(result.data.content));

            }

        } catch (err) {
            console.log('error', err.response?.data);
        }


    }


}