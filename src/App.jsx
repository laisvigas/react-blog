import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <UserCard name="Joseph Cooper" age="45 anos" occupation="Engenheiro" />
      <UserCard name="Amelia Brand" age="35 anos" occupation="Astronauta" />
      <Footer />
    </>
  );
}

export default App;
