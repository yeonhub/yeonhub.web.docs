import { BrowserRouter,Route, Routes,Link  } from "react-router-dom";
import Home from "./pages9/Home";
import About from "./pages9/About";
import Ceo from "./pages9/Ceo";
import Layout from "./pages9/Layout";
import CeoName from "./pages9/CeoName";
import CeoLayout from "./pages9/CeoLayout";
import AboutLayout from "./pages9/AboutLayout";
import BodyLayout from "./pages9/BodyLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        
        <Routes >
          
          <Route path="/" element={<Layout />}>
            <Route element={ <BodyLayout />}>
              <Route  index  element={ <Home /> } />            
              <Route path='about' element={<AboutLayout />}>
                <Route index element={<About />} />              
              </Route>
          
              <Route path='ceo' element={<CeoLayout />}>
                <Route index element={<Ceo />} />
                <Route path=':name' element={<CeoName />} />
              </Route>
            </Route>

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;