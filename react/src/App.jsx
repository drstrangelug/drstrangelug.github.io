import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Chapters from './pages/Chapters';
import Background from './pages/Background';
import Contact from './pages/Contact';
import Chapter2Section1 from './pages/chapters/chapter2/Section1';
import Chapter2Section2 from './pages/chapters/chapter2/Section2';
import Chapter2Section3 from './pages/chapters/chapter2/Section3';
import NotFound from './pages/NotFound';

const Layout = () => (
  <>
    <header>
      <img src="/images/header.png" alt="UFO 1999 Header" />
    </header>

    <nav className="navigation">
      <NavLink to="/" end>
        About
      </NavLink>
      <NavLink to="/chapters">Chapters</NavLink>
      <NavLink to="/background">Background</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>

    <main id="content">
      <Outlet />
    </main>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="chapters" element={<Chapters />} />
          <Route path="chapters/chapter-2/section-1" element={<Chapter2Section1 />} />
          <Route path="chapters/chapter-2/section-2" element={<Chapter2Section2 />} />
          <Route path="chapters/chapter-2/section-3" element={<Chapter2Section3 />} />
          <Route path="background" element={<Background />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
