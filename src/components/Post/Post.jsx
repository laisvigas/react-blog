import { useState } from "react";
import "./style.css";

function Post() {
    const [curtidas, setCurtidas] = useState(0); // [estado, função que modifica o estado]
    const [carregando, setCarregando] = useState(true);

    function adicionarCurtida() {
        setCurtidas(curtidas+1)
    }

    setTimeout(() => {
        setCarregando(false);
    }, 3000)

    if (carregando) {
        return (
            <div className="post">
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <div className="post">
            <p>
            Na Interestelar, somos dedicados a expandir os limites da presença humana além das estrelas. Como pioneiros na exploração interestelar e no desenvolvimento de tecnologias espaciais sustentáveis, nossa missão é encontrar novos horizontes e oportunidades para a vida além da Terra. Combinando inovação, colaboração e uma busca incansável por descobertas, buscamos conectar a humanidade às infinitas possibilidades do cosmos. Acreditamos que o futuro não está apenas lá fora — ele é nosso para construir.            
            </p>
            <button onClick={adicionarCurtida}>
                Curtidas: {curtidas}
            </button>
        </div>
    );
}

export default Post;