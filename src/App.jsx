import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import Footer from "./components/Footer/Footer";
import imgCooper from "./assets/cooper.jpg";
import imgBrand from "./assets/brand.jpg";
import imgProfessor from "./assets/professor.jpeg";
import Post from "./components/Post/Post";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header/>
      <About> Sobre nós</About>
      <Post/>
      <UserCard avatar={imgCooper} name="Joseph Cooper" age="45 anos" occupation="Engenheiro" />
      <UserCard avatar={imgBrand} name="Amelia Brand" age="35 anos" occupation="Astronauta" />
      <UserCard avatar={imgProfessor} name="Brand" age="65 anos"/>
      <Footer/>
    </>
  );
}

export default App;
