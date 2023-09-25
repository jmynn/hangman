import { FunctionComponent, ReactNode, SetStateAction } from 'react'
import styles from './GameArea.module.scss'

type TypeGameArea = {
  handleSubmit: () => void
  letter: string
  setLetter: (value: SetStateAction<string>) => void
  finishGame: (message: string) => void
}

const GameArea: FunctionComponent<TypeGameArea> = ({ handleSubmit, letter, setLetter, finishGame }): ReactNode => {
  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        handleSubmit()
      }} className={styles.gameArea}>
        <input type='text' name='iLetter' value={letter} onChange={e => setLetter(e.target.value)} required />
        <button>Проверить</button>
        <button onClick={(e) => {
          e.stopPropagation()
          finishGame(`Игра проиграна!`)
        }}>Сбросить игру</button>
      </form>
    </>
  )
}

export default GameArea