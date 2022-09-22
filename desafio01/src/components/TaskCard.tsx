import { Circle, Check, Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './TaskCard.module.css';

interface TaskCardProps {
  id: String;
  taskMessage: String;
  isTaskComplete: Boolean;
  onCompleteTask: () => void;
  onDeleteTask: (taskKey : String) => void;
}


export function TaskCard({...props} : TaskCardProps) {

  const [taskCompleteState, setNewTaskCompleteState] = useState(props.isTaskComplete)

  // Deletar?
  const toggleIsTaskCompleteState = async () => {
      setNewTaskCompleteState(!taskCompleteState)
  }

  // Precisa de masi trabalho aqui
  const handleCompleteTask = async () => {
    props.onCompleteTask()

    setNewTaskCompleteState(!taskCompleteState)
  }

  const handleDeleteTask = async () => {
    props.onDeleteTask(props.id)
  }
  
  return (
    <div className={ taskCompleteState ?  styles.checked : styles.taskCard}>

    <button onClick={ handleCompleteTask } className={styles.checkMark}>
      {
        taskCompleteState 
        ?
          <Check size={24} />
        :
          <Circle size={24} />
      }

    </button>

      <div className={styles.taskCardMessage}>
        <p>{props.taskMessage}</p>
      </div>

      <button onClick={handleDeleteTask} className={styles.deleteTask}>
        <Trash size={24} />
      </button>

    </div>
  )
}