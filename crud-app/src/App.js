import './App.css';
import Navigation from './component/layout/Navigation';
import Myroute from './component/Myroute';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Myroute />
      </BrowserRouter>
    </div>
  );
}

export default App;
