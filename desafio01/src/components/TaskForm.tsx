import styles from './TaskForm.module.css'
import { PlusCircle } from 'phosphor-react'

export function TaskForm() {

  //Coletar texto do formulário
  //Repassar essa informação para o /TodoList criar <TaskCards />

  return (
    <form className={styles.taskForm}>
      <input 
        name='taskInput'
        type="text" 
        placeholder='Adicione uma nova tarefa' 
      />
      <button type="submit" className={styles.createButton}>
        <span>Criar</span>
        <PlusCircle alt='Criar' size={16} />

      </button>
    </form>
  )
}