import React, { useEffect , useState } from 'react';
import { Conteiner } from '../styles/home';
import Form from '../components/Form';
import { handTasks, add, del } from '../utils/utils'

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState()
  
  useEffect(() => {
    setIsLoading(true)
    handTasks(setTasks, setIsLoading);
  }, []);

  return (
    <Conteiner>
      { isLoading ? <p>carregango...</p> : null }
      <section id="add-task">
        <h1>Adcionar tarefa</h1>
        <input
          type="text"
          placeholder="Insira uma Tarefa"
          value={ task }
          onChange={ (e) => setTask(e.target.value)}
          />
        <button
          type="submit"
          onClick={ () => add(task) }
          >
            Adicionar
          </button>
      </section>
      <section id="all-tasks">
        <h2>Todas a Tarefas</h2>
          <ul>
          {
            tasks.map(({ Task, _id }) => (
              <div>
                <div id="task">
                  <li>{ Task }</li>
                  <button type="submit" onClick={ () => del(_id) }>Editar</button>
                  <button type="submit" onClick={ () => del(_id) }>Remover</button>
                </div>
                <Form />
              </div>
            ))
          }
          </ul>
      </section>
    </Conteiner>
  );
}

export default Home;