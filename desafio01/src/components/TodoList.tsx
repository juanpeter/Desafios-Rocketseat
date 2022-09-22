import { ClipboardText, PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { TaskCard } from './TaskCard'
import {v4 as uuidv4} from 'uuid';

import styles from './TodoList.module.css'

interface Task {
  id: string;
  taskMessage: string;
  isTaskCompleted: boolean;
}

export function TodoList() {

  const [tasks, setNewTasks] = useState([] as Task[])

  const [completedTasks, setNewCompletedTasks] = useState([] as Task[])

  const handleCreateNewTask = async (event : FormEvent) => {
    event.preventDefault();

    const newTask : Task = {
      id: uuidv4(),
      taskMessage: event.target.inputTask.value,
      isTaskCompleted: false
    }

    // Colocar aqui?
    // handleNewCompletedTasks
    // console.log(completedTasks.length)

    setNewTasks([...tasks, newTask])
  }

  const handleDeleteTask = async (taskKey : String) => {

    const taskWithoutDeletedTask = 
    tasks.filter(task => {
      return task.id !== taskKey
    })
    
    setNewTasks(taskWithoutDeletedTask)
  }

  // Precise de mais trabalho aqui
  const handleNewCompletedTasks = async () => {

    const newCompletedTasks = tasks.filter(
      task => {
        return task.isTaskCompleted === true
      }
    )
    setNewCompletedTasks(newCompletedTasks)
  }

  return (

    <article>
      
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <input 
          name='inputTask'
          type="text" 
          placeholder='Adicione uma nova tarefa' 
        />
        <button type="submit" className={styles.createButton}>
          <span>Criar</span>
          <PlusCircle alt='Criar' size={16} />
        </button>
      </form>

      <div className={styles.mainContent}>
        <aside>
          <div>
            <span className='blueText'>Tarefas criadas</span>
            <span>{tasks.length}</span>
          </div>
          <div>            
            <span className='purpleText'>Concluídas</span>
            {/* Mostrar tasks concluidas e tasks totais */}
            <span>{`${ completedTasks.length } de ${ tasks.length }`}</span>
          </div>
        </aside>
        
        {
          tasks.length > 0 ? 
              tasks.map(task => {
                return (
                  <TaskCard 
                  key={task.id}
                  id={task.id}
                  taskMessage={task.taskMessage}
                  isTaskComplete={task.isTaskCompleted}
                  onCompleteTask={handleNewCompletedTasks}
                  onDeleteTask={handleDeleteTask}
                  />
                )
              })
          :
            <div className={styles.taskList}>
              <ClipboardText size={56} />
              <b>Você ainda não tem tarefas cadastradas</b>
              <p>Crie tarefas e organize seus itens a fazer</p>

            </div>     
     
        }
        
        <hr />

      </div>
    </article>
  )
}