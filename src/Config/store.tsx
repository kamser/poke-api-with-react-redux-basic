import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import pokemonReducer from '../Middleware/pokemonSlice';
//import { useDispatch } from 'react-redux';
//import { ThunkAction } from 'redux-thunk';
//import rootReducer, { RootState } from './rootReducer'


const reducer = {
    pokemon: pokemonReducer,
};

export const store = configureStore({
    reducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

/*export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export default store*/