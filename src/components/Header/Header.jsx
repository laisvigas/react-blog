import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/Users">Usuários</Link>
                </li>

                <li>
                    <Link to="/About">Sobre</Link>
                </li>

                <li>
                    <Link to="/Sac">Sac</Link>
                </li>
            </ul>
        </header>
    )
}
export default Header;