import UserCard from '../../components/UserCard/UserCard'
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Users() {
  return (
    <div>
        <Header/>
        <h1>Lista de Usuários</h1>
        <UserCard avatar={img1} name="Maria Lopes" age="45 anos" occupation="Engenheiro" />
        <UserCard avatar={img2} name="Joana Ferreira" age="35 anos" occupation="Astronauta" />
        <UserCard avatar={img3} name="Emilia Silva" age="65 anos"/>
        <Footer/>
    </div>
  )
}

export default Users
