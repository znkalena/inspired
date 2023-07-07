import {combineReducers} from '@reduxjs/toolkit';
import navigationReducer from './navigationSlice'

export const rootReducer = combineReducers({
    navigation:navigationReducer,
})

