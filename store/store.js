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
import productSlice from "./productSlice";

// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
}

const rootReducer = combineReducers({ product: productSlice });

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const resetStore = async () => {
    await persistor.purge();
    store.dispatch(resetStore());
    await persistor.flush();
};

export let persistor = persistStore(store);