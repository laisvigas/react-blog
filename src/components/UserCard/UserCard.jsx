import "./UserCard.css"

function UserCard({ avatar, name, age, testimony }) {
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
        <img src={avatar} alt="Foto de Perfil"/>
        <li>{name}</li>
        <li>{age} anos</li>
        <li>{testimony ? testimony : "Não definido"}</li>
    </ul>
    </div>
    );
}
export default UserCard;