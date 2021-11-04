import React, { useEffect , useState } from 'react'
import Header from '../components/Header';
import { getAllTasks, addTask, excludeTask } from '../service/requests'

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState()

  const handTasks = async () => {
    const data = await getAllTasks();
    setTasks(data);
    setIsLoading(false);
  }
  
  useEffect(() => {
    setIsLoading(true)
    handTasks();
  }, []);

  return (
    <> 
      <Header />
      { isLoading ? <p>carregango...</p> : null }
      <section>
        <h1>Adcionar tarefa</h1>
        <input
          type="text"
          placeholder="Insira uma Tarefa"
          value={ task }
          onChange={ (e) => setTask(e.target.value)}
          />
        <button
          type="submit"
          onClick={ () => addTask(task) }
          >
            Criar
          </button>
      </section>
      <section>
        <h1>Todas a Tarefas</h1>
          <ul>
          {
            tasks.map(({ Task, _id }) => (
              <>
                <li>{ Task }</li>
                <button>Editar</button>
                <button
                type="submit"
                onClick={ () => excludeTask(_id) }
                >Remover</button>
                
              </>
            ))
          }
          </ul>
      </section>
    </>
  );
}

export default Home;