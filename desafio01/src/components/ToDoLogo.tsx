import styles from './ToDoLogo.module.css';
import globalStyles from '../global.css';
import logo from '../assets/rocket.svg'

export function ToDoLogo() {
  return (
  <div className={styles.ToDoLogo}>
    <img src={logo} alt="Logo TodoList" />
    <span className='blueText'>to</span><span className='purpleText'>do</span>
  </div>
  )
}