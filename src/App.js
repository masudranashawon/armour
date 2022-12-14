import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Featured from "./components/Featured";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const App = () => {
  useSmoothScroll();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/featured' element={<Featured />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound needFullHeight={true} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
