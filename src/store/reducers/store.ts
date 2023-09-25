import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import HangmanReducer from "./HangmanSlice"

const rootReducer = combineReducers({
    WordReducer: HangmanReducer,
})
export const setupStore = () => configureStore({ 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
