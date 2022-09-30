import styles from './Header.module.css'

import { ToDoLogo } from './ToDoLogo'

export function Header() {
  return (
    <header className={styles.header}>
      <ToDoLogo />
    </header>


  )
}