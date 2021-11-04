import Home from './pages/Home'
import Header from './components/Header';
import { Conteiner } from './styles/app';

function App() {
  return (
    <Conteiner>
      <Header />
      <Home />
    </Conteiner>
  );
}

export default App;
