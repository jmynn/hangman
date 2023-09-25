/* eslint-disable @typescript-eslint/no-unused-vars */
import { Slice, createSlice } from "@reduxjs/toolkit"
import {data} from '../../words'

type TypeInitialState = {
    currentWord: string
    currentStep: number
    mainTheme: string
}

const randomIndex = (min: number, max: number): number  => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
const generateRandomWord = (): string[] => {
    const {theme, words} = data[randomIndex(0, data.length - 1)]
    return [words[randomIndex(0, words.length - 1)].toLowerCase(), theme]
}
const [randomWord, mainTheme] = generateRandomWord()

export const maxSteps: number = 6

const initialState: TypeInitialState = {
    currentWord: randomWord,
    currentStep: 0,
    mainTheme
}

const HangmanSlice: Slice<TypeInitialState> = createSlice({
    name: 'hangman',
    initialState,
    reducers: {
        incrementCurrentStep: (state): void => {
            if(state.currentStep !== maxSteps) state.currentStep += 1
        },
        clear: (state): void => {
            const [rndw, theme] = generateRandomWord()
            state.currentWord = rndw
            state.currentStep = 0
            state.mainTheme = theme
        }
    }
})
export const { incrementCurrentStep, clear } = HangmanSlice.actions
export default HangmanSlice.reducer


