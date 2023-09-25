import { FunctionComponent, ReactNode } from 'react'
import styles from './WordInfo.module.scss'
type TypeWordInfo = {
  currentStep: number
  maxSteps: number
  currentWord: string
}

const WordInfo:FunctionComponent<TypeWordInfo> = ({currentWord, maxSteps, currentStep}):ReactNode => {
  return(
    <>
      <h2 className={styles.h2}>Загадано слово из {currentWord.length} букв</h2>
      <h3 className={styles.h3}>Оставшиеся попытки - {maxSteps - currentStep}</h3>
    </>
  )
}

export default WordInfo