import {combineReducers} from '@reduxjs/toolkit';
import navigationReducer from './navigationSlice';
import colorReducer from './colorSlice';
import goodsReducer from './goodsSlice';
import productReducer from './productSlice'
import favoritesSlice from './favoritesSlice'

export const rootReducer = combineReducers({
    navigation:navigationReducer,
    color:colorReducer,
    goods:goodsReducer,
    product:productReducer,
    favorites:favoritesSlice,
})

