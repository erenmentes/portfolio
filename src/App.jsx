import './App.css';
import About from './components/About/About';
import FactsList from './components/Facts/FactsList';
import GithubStats from './components/Github/GithubStats';
import Navbar from './components/Navbar/Navbar';
import RepositoriesList from './components/Repositories/RepositoriesList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <div className="Lists">
        <RepositoriesList/>
        <div className="Lists-2">
          <GithubStats/>
          <FactsList/>
        </div>
      </div>
    </div>
  );
}

export default App;
