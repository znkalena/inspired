import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { CATEGORY_URL } from '../Const';

export const fetchNavigation = createAsyncThunk(
    'navigation/fetcNavigation',
    async() => {
        const responce = await fetch(CATEGORY_URL);
        const data = await responce.json();
        return data;
    },
    ) 

const navigationSlice = createSlice({
    name:'navigation',
    initialState:{
        activeGender:'women',
        status:'idle',
        categories:{},
        genderList:[],
        error:null,
    },
    reducers:{
        setActiveGender:(state,action) => {
            state.activeGender=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchNavigation.pending,((state) => {state.status ='loading'}))
        .addCase(fetchNavigation.fulfilled,(state,action) =>{
            state.status = 'success';
            state.categories = action.payload;
            state.genderList = Object.keys(action.payload);
        })
        .addCase(fetchNavigation.rejected,(state,action) => {
            state.status = 'failed';
            state.error = action.error.message;            
        })
    }
})

export const {setActiveGender} = navigationSlice.actions;
export default navigationSlice.reducer;