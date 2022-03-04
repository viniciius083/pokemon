import Header from './components/header';
import './App.css'
import Footer from './components/footer'
import Pokemon from './components/pokemon/pokemon'

function App() {
  return (
    <div className="App">
      <header>
        <Header /> 
      </header>

      <main>
        <div> 
              <Pokemon />
        </div>
      </main>
    </div>
  );
}

export default App;
