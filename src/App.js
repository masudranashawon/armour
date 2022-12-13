import { Route, Routes } from "react-router-dom";
import Featured from "./components/Featured";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const App = () => {
  useSmoothScroll();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/featured' element={<Featured />} />
      </Routes>
    </div>
  );
};

export default App;
