import React, { useEffect , useState } from 'react'
import Header from '../components/Header';
import { getAllTasks } from '../service/requests'

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setIsLoading(true)
    async function handTasks() {
      const data = await getAllTasks();
      setTasks(data);
      setIsLoading(false);
    }
    handTasks();
  }, []);

  return (
    <> 
      <Header />
      { isLoading ? <p>carregango...</p> : null }
      <section>
        <h1>Adcionar tarefa</h1>
        <input type="text" placeholder="Insira uma Tarefa" />
        <button type="button">Criar</button>
      </section>
      <section>
        <h1>Todas a Tarefas</h1>
          <ul>
          {
            tasks.map((task) => (
              <>
                <li>{ task.Task }</li>
                <button>Editar</button>
                <button>Remover</button>
              </>
            ))
          }
          </ul>
      </section>
    </>
  );
}

export default Home;