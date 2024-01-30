import {combineReducers, configureStore} from '@reduxjs/toolkit';
import CounterSlice from './features/CounterSlice';
import AuthSlice from './features/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const reducers = combineReducers({
  counter: CounterSlice,
  auth: AuthSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);
export {persistor, store};
