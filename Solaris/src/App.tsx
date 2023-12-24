import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import WorkingOnWebsite from './pages/WorkingOnWebsite';

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<WorkingOnWebsite />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
