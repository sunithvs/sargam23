
import './output.css';
import Adminform from './pages/Adminform';
import Pointstable from './pages/Pointstable';
import Main from './pages/main';
import Literature from './pages/literature';
import Dance from './pages/dance';
import Finearts from './pages/finearts';
import Music from './pages/music';
import Theatre from './pages/theatre';
import Footer from './components/Footer';
import {Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>

     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path="/adminform" element={<Adminform/>}/>
      <Route path="/livescore" element={<Pointstable/>}/>
      <Route path="/literature" element={<Literature/>}/>
      <Route path="/music" element={<Music/>}/>
      <Route path="/dance" element={<Dance/>}/>
      <Route path="/theatre" element={<Theatre/>}/>
      <Route path="/finearts" element={<Finearts/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
  </div>
  );
}

export default App;
