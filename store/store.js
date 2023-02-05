import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
import productReducer from "./productSlice";
import cartReducer from './cartSlice';

// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
}

const rootReducer = combineReducers({ product: productReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    composeWithDevTools,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
            // serializableCheck: {
            //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
        }),
});

export const resetStore = async () => {
    await persistor.purge();
    store.dispatch(resetStore());
    await persistor.flush();
};

export let persistor = persistStore(store);