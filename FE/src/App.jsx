import './App.css';
import Boxes from './pages/Boxes';
import Form from './pages/FormPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Boxes />} />
        <Route path='/:id' element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;