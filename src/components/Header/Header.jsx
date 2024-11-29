import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";

function Header() {
    const { logout } = useAuth();

    return (
        <header className="d-flex flex-column">
            <Navbar bg="success" variant="dark" className="py-3">
                <Container className="d-flex flex-column align-items-center text-center">
                    <Navbar.Brand className="w-100">
                        <h1 className="text-light fs-2 m-0">Alice Vigas Yoga</h1>
                        <p className="text-light fs-6 mb-0">Equilíbrio e bem-estar</p>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav" className="d-flex justify-content-center align-items-center">
                        <Nav className="text-center">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/Users" className="nav-link">Depoimentos</Link>
                            <Link to="/About" className="nav-link">Sobre</Link>
                            <Link to="/Sac" className="nav-link">Contatos</Link>
                            <Link to="/Login" className="nav-link">Login</Link>
                            <Link to="/Signup" className="nav-link">Signup</Link>
                            <Button variant="outline-light" onClick={() => logout()}>
                                Sair
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </header>
    );
}

export default Header;
