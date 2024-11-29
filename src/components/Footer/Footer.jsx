import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="py-3 mt-4 bg-dark" data-bs-theme="dark">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/users" className="nav-link px-2 text-body-secondary">Usuários</Link>
                </li>
                <li className="nav-item">
                    <Link to="/sac" className="nav-link px-2 text-body-secondary">SAC</Link>
                </li>
                <li className="nav-item">
                    <Link to="/sobre" className="nav-link px-2 text-body-secondary">Sobre</Link>
                </li>
            </ul>
            <p className="text-center text-body-secondary">Criado por <strong>Laís Vigas</strong></p>
        </footer>
    );
}

export default Footer;
