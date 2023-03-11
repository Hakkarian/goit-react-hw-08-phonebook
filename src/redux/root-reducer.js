import contactsReducer from './tasks/cont-slice';
import authReducer from './auth/auth-slice';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';
import filterReducer from './filters/filter-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
    filter: filterReducer,
    contacts: contactsReducer,
    auth: persistedReducer
})

export default persistedReducer;