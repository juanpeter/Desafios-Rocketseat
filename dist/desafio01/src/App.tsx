import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";


import styles from './app.module.css';

function App() {

  //Passar dados iniciais para os componentes
  //Mostrar componentes em tela

  return (
    <div className="App">
      <Header />
      <main className={styles.wrapper}>
        <TodoList />
      </main>
    </div>
  )
}

export default App
