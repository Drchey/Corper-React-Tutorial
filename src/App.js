import './App.css';
import { Fragment } from 'react';
import HomePage from './routes/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Fatima from './routes/Fatima'

function App() {
  return (
    <Fragment>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fatima" element={<Fatima />} />
          </Routes>
      </Router>
       
    </Fragment>
    
    );
}

export default App;
