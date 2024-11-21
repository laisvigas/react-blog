import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Users from "./pages/Users/Users";
import Sac from "./pages/Sac/Sac";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Sac" element={<Sac />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;