import Surprise from './Surprise';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/surprise' element={<Surprise />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
