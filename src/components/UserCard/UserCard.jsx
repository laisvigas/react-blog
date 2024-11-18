function UserCard({ name, age, occupation }) {
return (
    <div>
    <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Ocupação: {occupation}</li>
    </ul>
    </div>
    );
}
export default UserCard;
