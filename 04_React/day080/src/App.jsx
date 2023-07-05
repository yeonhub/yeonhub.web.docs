import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./assets/css/reset.css";
import Home from "./router2/Home"
import Layout from "./router2/Layout";
import About from "./router2/About";
import CeoLayout from "./router2/CeoLayout";
import Ceo from "./router2/Ceo";
import CeoName from "./router2/CeoName";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="ceo" element={<CeoLayout />}>
              <Route index element={<Ceo />} />
              <Route path=":name" element={<CeoName />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;