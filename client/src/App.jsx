import FooterComp from "./Components/FooterComp";
import Header from "./Components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
}

export default App;
