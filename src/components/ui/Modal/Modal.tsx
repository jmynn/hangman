import { FunctionComponent, ReactNode, memo } from 'react'
import styles from './Modal.module.scss'
import Text from '../Text/Text'

type TypeModal = {
  text: string
  word: string
  onClose: () => void
  isActive: boolean
}

const Modal:FunctionComponent<TypeModal> = memo(({text, word, onClose, isActive}):ReactNode => { console.log('modal')
  return(
    isActive &&
     <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.title}>Игра окончена!</div>
        <div className={styles.body}>
          <Text text={text} />
          <Text defaultText='Загаданное слово - ' text={word} />
        </div>
        <div className={styles.btn}>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
     </div>
  )
})

export default Modal