import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import GitHub from './Components/GitHub';
import Home from './Components/Home';
import Nav from './Components/Nav';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='github' element={<GitHub/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
