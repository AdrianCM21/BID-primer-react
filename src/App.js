import './App.css';
import Lista from './elementos/Lista';
import Titulo from './elementos/Titulo';
import TituloSegundario from './elementos/TituloSegundario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo/>
        <TituloSegundario/>
        <Lista/>
      </header>
    </div>
  );
}

export default App;
