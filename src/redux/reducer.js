import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactReducer } from './contactSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;