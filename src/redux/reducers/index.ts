import { combineReducers } from 'redux';
import NewsReducer from './news.reducer'

export const rootReducer = combineReducers({
    //NOTE Leave 'combineReducers' method for further reducer to add on in future,this will unify them in the store
    NewsReducer
})

export type RootState = ReturnType<typeof rootReducer>;
