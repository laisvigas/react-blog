import { Link } from "react-router-dom";

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
            </ul>
        </header>
    )
}
export default Header;