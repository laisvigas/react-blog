import { useForm } from "react-hook-form";
import { login, loginGoogle } from "../../firebase/authentication";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { Button } from "react-bootstrap";

function Login() {

    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const { setAutenticado } = useAuth();

    async function enviarFormulario({ email, senha }){
        try {
        await login(email, senha);
        setAutenticado(true);
        navigate("/"); // home
        }
        catch(erro) {
            if(erro.code == "auth/invalid-credential"){
                window.alert("Email ou senha invalidos.");
            } else {
                console.error(erro);
            }
        }
    }

    async function entrarComGoogle() {
        try {
            await loginGoogle();
            setAutenticado(true);
            navigate("/");
        } catch(erro) {
            console.error(erro);
            window.alert("Algo deu errado.")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(enviarFormulario)}>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register("email", {
                        required: true, 
                        minLength: 10,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        })} autoComplete="off"/>
                </div>

                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" {...register("senha", {
                        required: true,
                        minLength: 6,
                        maxLength: 15
                        })}/>
                </div>

                <Button variant="primary" type="submit">
                    Entrar
                </Button>

                <Button variant="dark" type="button" onClick={entrarComGoogle}>
                    Entrar com o Google
                </Button>
            </form>
        </div>
    );
}

export default Login;