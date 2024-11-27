import { useForm } from "react-hook-form";
import { login, loginGoogle } from "../../firebase/authentication";
import { useNavigate } from "react-router-dom";

function Login() {

    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();

    async function enviarFormulario({ email, senha }){
        try {
        await login(email, senha);
        window.alert("Acesso permitido!");
        navigate("/") // home
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
            window.alert("Acerto permitido com o Google.")
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

                <button>Entrar</button>

                <button type="button" onClick={entrarComGoogle}>Entrar com o Google</button>
            </form>
        </div>
    );
}

export default Login;