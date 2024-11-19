import "./style.css"


function UserCard({ avatar, name, age, occupation }) {
const carregando = false;
if (carregando) {
    return (
        <div className="user-card">
            <p>Carregando...</p>
        </div>
        );
}



return (
    <div className="user-card">
    <ul>
        <img src={avatar} alt="Foto de Perfil" width={300}/>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Ocupação: {occupation ? occupation : "Não definido"}</li>
    </ul>
    </div>
    );
}
export default UserCard;