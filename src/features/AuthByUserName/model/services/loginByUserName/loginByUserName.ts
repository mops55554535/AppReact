import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';

import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface loginByUserNameProps {
    username:string
    password: string
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, {rejectValue: string}>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const responce = await axios.post<User>('http://localhost:8000/login', authData);
            if (!responce.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(responce.data));
            thunkAPI.dispatch(userActions.setAuthData(responce.data));
            return responce.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
