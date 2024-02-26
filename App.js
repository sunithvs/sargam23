
import './output.css';
import Adminform from './pages/Adminform';
import Main from './pages/main';
import {Routes, Route, BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>

     <Routes>
      
      <Route path='/' element={<Main/>}/>
      <Route path='/Admin' element={<Adminform/>}/>
     </Routes>
     </BrowserRouter>
  </div>
  );
}

export default App;
