import './App.css';
import Parallax from './components/Parallax';

function App() {
  return (
    <div className="App bg-bkg w-full h-screen text-white text-base selection:text-bkg selection:bg-accent">
      <Parallax />
    </div>
  );
}

export default App;
