import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from  './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App
