import Header from '../components/Header'

function Home() {
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