import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COLORS_URL } from "../Const";


export const fetchColors = createAsyncThunk(
    'colors/fetchColors',
    async() => {
        const responce = await fetch(COLORS_URL);
        const data = await responce.json();
        return data;
    },
    ) 

const colorSlice = createSlice({
    name:'colors',
    initialState:{
        activeColor:'red',
        status:'idle',
        colors:[],        
        error:null,
    },
    reducers:{
        setActiveColor:(state,action) => {
            state.activeColor=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchColors.pending,((state) => {state.status ='loading'}))
        .addCase(fetchColors.fulfilled,(state,action) =>{
            state.status = 'success';
            state.colors = action.payload;            
            console.log(state.colors)
        })
        .addCase(fetchColors.rejected,(state,action) => {
            state.status = 'failed';
            state.error = action.error.message;            
        })
    }
})

export const {setActiveColor} = colorSlice.actions;
export default colorSlice.reducer;