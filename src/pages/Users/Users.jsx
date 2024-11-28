import UserCard from '../../components/UserCard/UserCard'
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import { useAuth } from '../../context/Auth';
import { Navigate } from 'react-router-dom';

function Users() {
    const { autenticado } = useAuth();

    if(!autenticado) return <Navigate to="/Login"/>

  const users = [
      { 
          avatar: img1, 
          name: "Clara Monteiro", 
          age: 42, 
          testimony: "A prática de yoga com o Alice Vigas mudou minha vida. Me sinto mais tranquila e equilibrada a cada aula!" 
      },
      { 
          avatar: img2, 
          name: "Maria Oliveira", 
          age: 38, 
          testimony: "Nunca pensei que yoga pudesse aliviar tanto meu estresse. Recomendo para todos que querem cuidar do corpo e da mente." 
      },
      { 
          avatar: img3, 
          name: "Laura Fernandes", 
          age: 31, 
          testimony: "O ambiente acolhedor e as aulas personalizadas são incríveis. Finalmente encontrei um espaço que combina com minha energia!" 
      },
  ];

  return (
    <>
      <div className="user-card-container">
          {users.map((user, index) => (
              <UserCard
                  key={index}
                  avatar={user.avatar}
                  name={user.name}
                  age={user.age}
                  testimony={user.testimony}
              />
          ))}
      </div>
    </>
  );
}

export default Users;
