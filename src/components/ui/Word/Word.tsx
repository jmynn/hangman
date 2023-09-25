import { FunctionComponent, ReactNode } from 'react'
import styles from './Word.module.scss'

type TypeWord = {
  guessedWord: string[]
}

const Word:FunctionComponent<TypeWord> = ({guessedWord}):ReactNode => {
  return(
    <div className={styles.word}>
          {guessedWord.map(l => `${l} `)}
    </div>
  )
}

export default Word