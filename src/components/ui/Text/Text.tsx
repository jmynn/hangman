import { FunctionComponent, ReactNode } from 'react'
import styles from './Text.module.scss'

type TypeText = {
  defaultText?: string
  text: string
}

const Text:FunctionComponent<TypeText> = ({defaultText, text}):ReactNode => {
  return(
  <div className={styles.text}>{defaultText}{text}</div>
  )
}

export default Text