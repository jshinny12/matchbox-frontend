import './App.css';

import Query from './components/Query.js';
import Input from './components/Input.js';
import Home from './components/Home.js';
import Navigation from './components/Navigation.js'
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from 'react-router-dom';



function App() {  
  return (
    <div className="App">
    <Navigation />
     <Routes>
       <Route path="/input" element={<Input />} />
       <Route path="/query" element={<Query />} />
       <Route path="/" element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
