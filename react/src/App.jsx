import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Chapters from "./pages/Chapters";
import Background from "./pages/Background";
import Contact from "./pages/Contact";
import Chapter2Section1 from "./pages/chapters/chapter2/Section1";
import Chapter2Section2 from "./pages/chapters/chapter2/Section2";
import Chapter2Section3 from "./pages/chapters/chapter2/Section3";
import Chapter2Section4 from "./pages/chapters/chapter2/Section4";
import Chapter2Section5 from "./pages/chapters/chapter2/Section5";
import Chapter2Section6 from "./pages/chapters/chapter2/Section6";
import Chapter2Section7 from "./pages/chapters/chapter2/Section7";
import Chapter2Section8 from "./pages/chapters/chapter2/Section8";
import Chapter2Section9 from "./pages/chapters/chapter2/Section9";
import Chapter2Section10 from "./pages/chapters/chapter2/Section10";
import Chapter2Section11 from "./pages/chapters/chapter2/Section11";
import Chapter2Section12 from "./pages/chapters/chapter2/Section12";
import Chapter2Section13 from "./pages/chapters/chapter2/Section13";
import Chapter2Section14 from "./pages/chapters/chapter2/Section14";
import Chapter2Section15 from "./pages/chapters/chapter2/Section15";
import Chapter2Section16 from "./pages/chapters/chapter2/Section16";
import Chapter2Section17 from "./pages/chapters/chapter2/Section17";
import Chapter2Section18 from "./pages/chapters/chapter2/Section18";
import Chapter2Section19 from "./pages/chapters/chapter2/Section19";
import Chapter2Section20 from "./pages/chapters/chapter2/Section20";
import Chapter2Section21 from "./pages/chapters/chapter2/Section21";
import Chapter2Section22 from "./pages/chapters/chapter2/Section22";
import Chapter2Section23 from "./pages/chapters/chapter2/Section23";
import Chapter2Section24 from "./pages/chapters/chapter2/Section24";
import Chapter2Section25 from "./pages/chapters/chapter2/Section25";
import Chapter2Section26 from "./pages/chapters/chapter2/Section26";
import Chapter2Section27 from "./pages/chapters/chapter2/Section27";
import NotFound from "./pages/NotFound";

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
          <Route
            path="chapters/chapter-2/section-1"
            element={<Chapter2Section1 />}
          />
          <Route
            path="chapters/chapter-2/section-2"
            element={<Chapter2Section2 />}
          />
          <Route
            path="chapters/chapter-2/section-3"
            element={<Chapter2Section3 />}
          />
          <Route
            path="chapters/chapter-2/section-4"
            element={<Chapter2Section4 />}
          />
          <Route
            path="chapters/chapter-2/section-5"
            element={<Chapter2Section5 />}
          />
          <Route
            path="chapters/chapter-2/section-6"
            element={<Chapter2Section6 />}
          />
          <Route
            path="chapters/chapter-2/section-7"
            element={<Chapter2Section7 />}
          />
          <Route
            path="chapters/chapter-2/section-8"
            element={<Chapter2Section8 />}
          />
          <Route
            path="chapters/chapter-2/section-9"
            element={<Chapter2Section9 />}
          />
          <Route
            path="chapters/chapter-2/section-10"
            element={<Chapter2Section10 />}
          />
          <Route
            path="chapters/chapter-2/section-11"
            element={<Chapter2Section11 />}
          />
          <Route
            path="chapters/chapter-2/section-12"
            element={<Chapter2Section12 />}
          />
          <Route
            path="chapters/chapter-2/section-13"
            element={<Chapter2Section13 />}
          />
          <Route
            path="chapters/chapter-2/section-14"
            element={<Chapter2Section14 />}
          />
          <Route
            path="chapters/chapter-2/section-15"
            element={<Chapter2Section15 />}
          />
          <Route
            path="chapters/chapter-2/section-16"
            element={<Chapter2Section16 />}
          />
          <Route
            path="chapters/chapter-2/section-17"
            element={<Chapter2Section17 />}
          />
          <Route
            path="chapters/chapter-2/section-18"
            element={<Chapter2Section18 />}
          />
          <Route
            path="chapters/chapter-2/section-19"
            element={<Chapter2Section19 />}
          />
          <Route
            path="chapters/chapter-2/section-20"
            element={<Chapter2Section20 />}
          />
          <Route
            path="chapters/chapter-2/section-21"
            element={<Chapter2Section21 />}
          />
          <Route
            path="chapters/chapter-2/section-22"
            element={<Chapter2Section22 />}
          />
          <Route
            path="chapters/chapter-2/section-23"
            element={<Chapter2Section23 />}
          />
          <Route
            path="chapters/chapter-2/section-24"
            element={<Chapter2Section24 />}
          />
          <Route
            path="chapters/chapter-2/section-25"
            element={<Chapter2Section25 />}
          />
          <Route
            path="chapters/chapter-2/section-26"
            element={<Chapter2Section26 />}
          />
          <Route
            path="chapters/chapter-2/section-27"
            element={<Chapter2Section27 />}
          />
          <Route path="background" element={<Background />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
