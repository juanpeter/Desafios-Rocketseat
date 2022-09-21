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

let demoTasks = [
  {
    id: uuidv4(),
    taskMessage: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isTaskCompleted: false
  },
  {
    id: uuidv4(),
    taskMessage: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    isTaskCompleted: true
  },
  {
    id: uuidv4(),
    taskMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    isTaskCompleted: false
  }
]

export function TodoList() {

  // UseState das task, armazena id, mensagem e se está completa
  const [tasks, setNewTasks] = useState([] as Task[])

  const handleCreateNewTask = async (event : FormEvent) => {
    event.preventDefault();

    const newTask : Task = {
      id: uuidv4(),
      taskMessage: event.target.inputTask.value,
      isTaskCompleted: false
    }

    setNewTasks([...tasks, newTask])

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

            {/* Mostrar tarefas criadas */}

            <span className='blueText'>Tarefas criadas</span>
            <span>0</span>
          </div>
          <div>

            {/* Mostrar tarefas concluídas */}
            
            <span className='purpleText'>Concluídas</span>
            <span>0</span>
          </div>
        </aside>
        
        {
          //Criar loop de TaskCards se houverem Tasks
          tasks.length > 0 ? 
              tasks.map(task => {
                return (
                  <TaskCard 
                  key={task.id}
                  taskMessage={task.taskMessage}
                  isTaskComplete={task.isTaskCompleted}
                  />
                )
              })

          //Se não tive, mostrar esse HTML
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