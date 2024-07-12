import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (NewJsonSettings, thunkApi) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkApi;
    
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());
    
    if(!userData){
        return rejectWithValue('')
    }
    try {
        const responce = await dispatch(setJsonSettingsMutation({
            userId: userData.id,
            jsonSettings:{
                ...currentSettings,
                ...NewJsonSettings
            }
        })).unwrap()

        if(!responce.jsonSettings){
            return rejectWithValue('')
        }
        return responce.jsonSettings
    } catch (e) {
        return rejectWithValue('error');
    }
});
