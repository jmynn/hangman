import { ReactNode, useCallback, useState, useRef, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks'
import { clear, incrementCurrentStep, maxSteps } from '../../../store/reducers/HangmanSlice'
import { RootState } from '../../../store/reducers/store'
import Figure from '../Figure/Figure'
import isIdenticalSetsOfLetters from '../../../utils'
import Modal from '../Modal/Modal'
import Word from '../Word/Word'
import WordInfo from '../WordInfo/WordInfo'
import GameArea from '../GameArea/GameArea'

type TypeFinishGame = (message: string) => void

const Game = (): ReactNode => {
  const { currentWord, currentStep, mainTheme } = useAppSelector((state: RootState) => state.WordReducer)
  const dispatch = useAppDispatch()
  const [letter, setLetter] = useState<string>('')
  const guessedLetters = useRef<Set<string>>(new Set())

  const [isActive, setIsActive] = useState<boolean>(false)
  const [modalMessage, setModalMessage] = useState<string>('')
  const [guessedWord, setGuessedWord] = useState<string[]>(new Array(currentWord.length).fill('_'))

  const finishGame: TypeFinishGame = useCallback((message: string): void => {
    setModalMessage(message)
    setIsActive(true)
    setLetter('')
    return
  }, [])
  const handleSubmit = (): void => {
    if (!currentWord.toLowerCase().includes(letter.toLowerCase())) {
      dispatch(incrementCurrentStep())
      currentStep === 5 && finishGame(`Вы проиграли!`)
    }
    else {
      guessedLetters.current.add(letter.toLowerCase())
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter && guessedWord[i] === '_') {
          setGuessedWord((prev: string[]) => {
            const copy: string[] = [...prev]
            copy[i] = letter
            return copy
          })
        }
      }
    }
    setLetter('')
    isIdenticalSetsOfLetters(currentWord, guessedLetters.current) && finishGame(`Поздравляю! Вы угадали!`)
  }
  const onClose = useCallback(() => {
    dispatch(clear())
    setIsActive(false)
  }, [])

  useEffect(() => {
    setGuessedWord(new Array(currentWord.length).fill('_'))
    guessedLetters.current = new Set()
  }, [currentWord])

  return (
    <div>
      <Figure steps={currentStep} />
      <div>
        {mainTheme}
        <Word guessedWord={guessedWord} />
        <div>
          <WordInfo currentStep={currentStep} currentWord={currentWord} maxSteps={maxSteps} />
          <GameArea finishGame={finishGame} handleSubmit={handleSubmit} letter={letter} setLetter={setLetter} />
        </div>
      </div>
      <Modal text={modalMessage} word={currentWord} onClose={onClose} isActive={isActive} />
    </div>
  )
}

export default Game