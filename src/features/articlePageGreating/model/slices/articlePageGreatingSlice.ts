import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlePageGreatingSchema } from '../types/articlePageGreatingSchema';

const initialState: ArticlePageGreatingSchema = {};

export const articlePageGreatingSlice = createSlice({
    name: 'articlePageGreating',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {},
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: articlePageGreatingActions } = articlePageGreatingSlice;
export const { reducer: articlePageGreatingReducer } = articlePageGreatingSlice;
