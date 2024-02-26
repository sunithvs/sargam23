
import './output.css';
import Adminform from './pages/Adminform';
import Main from './pages/main';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Scorepage from './pages/Scorepage';
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 'https://hsfedrdtdosvfuynfdsj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZmVkcmR0ZG9zdmZ1eW5mZHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1MDQ5MDAsImV4cCI6MjAyNDA4MDkwMH0.i1n9nlnl9yFTxDVZmQERFFEc4zIc7GcTg4iES4wa4SE"
const supabase = createClient(supabaseUrl, supabaseKey)
function App() {
  return (
    <div>
      <BrowserRouter>

     <Routes>
      
      <Route path='/' element={<Main/>}/>
      <Route path='/score' element={<Scorepage/>}/>
     </Routes>
     </BrowserRouter>
  </div>
  );
}

export default App;
