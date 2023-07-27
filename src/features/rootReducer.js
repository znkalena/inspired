import {combineReducers} from '@reduxjs/toolkit';
import navigationReducer from './navigationSlice';
import colorReducer from './colorSlice';
import goodsReducer from './goodsSlice';
import productReducer from './productSlice';
import favoritesReducer from './favoritesSlice';
import cartReducer from './cartSlice';
import searchReducer from './searchSlice';
import statusServerReduser from './statusServerSlice'

export const rootReducer = combineReducers({
    navigation:navigationReducer,
    color:colorReducer,
    goods:goodsReducer,
    product:productReducer,
    favorites:favoritesReducer,
    cart:cartReducer,
    search:searchReducer,
    statusServer:statusServerReduser,
})

