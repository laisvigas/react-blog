import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Users from "./pages/Users/Users";
import Sac from "./pages/Sac/Sac";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <Header />
        <main> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/Sac" element={<Sac />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
