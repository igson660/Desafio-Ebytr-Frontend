import React, { useEffect } from 'react'
import Header from '../components/Header';
import { getAllTasks } from '../service/requests'

function Home() {
  useEffect(() => {
    const allTasks = getAllTasks()
    console.log(allTasks);
  }, []);

  return (
    <> 
      <Header />
      <section>
        <h1>Adcionar tarefa</h1>
        <input type="text" placeholder="Insira uma Tarefa" />
        <button type="button">Criar</button>
      </section>
      <section>
        <h1>Todas a Tarefas</h1>
      </section>
    </>
  );
}

export default Home;