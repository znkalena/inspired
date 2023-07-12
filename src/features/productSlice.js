import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../Const";

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (id) =>{
        const responce = await fetch(`${GOODS_URL}/${id}`);        
        return await responce.json();
    }
)

const productSlice = createSlice({
name:'product',
initialState:{
    status:'idle',
    error:null,
    product:{},
},
extraReducers:(bulder => {
    bulder
    .addCase(fetchProduct.pending,(state) =>{
        state.status = 'loading';
    })
    .addCase(fetchProduct.fulfilled,(state,action) =>{
        state.status = 'seccess';
        state.product = action.payload;
    })
    .addCase(fetchProduct.rejected,(state,action) =>{
        state.status = 'failed';
        state.error =action.error.message
    })
})
});

export default productSlice.reducer;