import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import './sass/main.scss'
import About from "./components/About";
import Skills from "./components/Skills";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills />}/>
      </Routes>
      </BrowserRouter>
      </>
  )
}


export default App