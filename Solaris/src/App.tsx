import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import WorkingOnWebsite from './pages/WorkingOnWebsite';
import Gallery from './pages/Gallery';

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<WorkingOnWebsite />} />
        <Route path='/home' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App;
