import React, { useEffect , useState } from 'react';
import { getAllTasks, addTask, excludeTask } from '../service/requests';
import { Conteiner } from '../styles/home';
import Form from '../components/Form';

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
          onClick={ () => addTask(task) }
          >
            Adiocinar
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
                  <button type="submit" onClick={ () => excludeTask(_id) }>Editar</button>
                  <button type="submit" onClick={ () => excludeTask(_id) }>Remover</button>
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