import './App.css';
import { Fragment } from 'react';
import HomePage from './routes/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </Router>
       
    </Fragment>
    
    );
}

export default App;
