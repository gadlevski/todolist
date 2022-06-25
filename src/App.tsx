import { Route, Routes } from 'react-router-dom';
import './App.css';
import Events from './components/Events';
import Home from './components/Home';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="events" element={<Events />} />
    </Routes>
  </div>
);

export default App;
