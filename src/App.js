import { Route, Routes, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Documents from "./Pages/Documents";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();

  return (
    <>
      <Sidebar />
      {/* <Pages> */}
      <div style={{ paddingLeft: '54px' }}>
        <AnimatePresence mode="wait">
          <Routes>  {/* location={location} key={location.pathname} */}
            <Route path="/" element={<Home />} />
            <Route path="/recognition" element={<Documents />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </div>
      {/* </Pages> */}
    </>
  );
}

export default App;
