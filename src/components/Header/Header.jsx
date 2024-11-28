import { Link } from "react-router-dom";
import { logout } from "../../firebase/authentication";

function Header() {
    return (
        <header>
            <h1>Alice Vigas Yoga</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/Users">Depoimentos</Link>
                </li>

                <li>
                    <Link to="/About">Sobre</Link>
                </li>

                <li>
                    <Link to="/Sac">Contatos</Link>
                </li>

                <li>
                    <Link to="/Login">Login</Link>
                </li>

                <li>
                    <Link to="/Signup">Signup</Link>
                </li>

                <li>
                    <button onClick={() => logout()}>
                        Sair
                    </button>
                </li>
                
            </ul>
        </header>
    )
}
export default Header;