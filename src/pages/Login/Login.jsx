import { useForm } from "react-hook-form";

function Login() {

    const { handleSubmit, register } = useForm();

    function enviarFormulario(dados){
        console.log("Formulario enviado")
        console.log(dados)
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
            </form>
        </div>
    );
}

export default Login;