import { Circle, Check, Trash } from 'phosphor-react';

import styles from './TaskCard.module.css';

interface TaskCardProps {
  key: String;
  taskMessage: String;
  isTaskComplete: Boolean;
}

export function TaskCard({taskMessage, isTaskComplete} : TaskCardProps) {

  
  return (
    <div className={ isTaskComplete ?  styles.checked : styles.taskCard}>

    <button className={styles.checkMark}>
      {
        isTaskComplete 
        ?
          <Check size={24} />
        :
          <Circle size={24} />
      }

    </button>

      <div className={styles.taskCardMessage}>
        <p>{taskMessage}</p>
      </div>
      <button className={styles.deleteTask}>
        <Trash size={24} />
      </button>

    </div>
  )
}