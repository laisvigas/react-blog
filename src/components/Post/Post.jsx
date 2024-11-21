import { useState } from "react";
import "./style.css";

function Post({title, author, image, article, time_reading}) {
    const [curtidas, setCurtidas] = useState(0); // [estado, função que modifica o estado]
    const [descurtidas, setDescurtidas] = useState(0);
    const [carregando, setCarregando] = useState(true);

    function adicionarCurtida() {
        setCurtidas(curtidas + 1);
    }

    function adicionarDescurtida() {
        setDescurtidas(descurtidas + 1);
    }

    setTimeout(() => {
        setCarregando(false);
    }, 3000);

    if (carregando) {
        return (
            <div className="post">
                <p>Carregando...</p>
            </div>
        );
    }

    return (
        <div className="post">
            <article>
                <h1> { title } </h1>

                <div className="author">
                    <img src={image} alt="Author" />
                    <p>{author}</p>
                </div>


                <button onClick={adicionarCurtida}>
                    👍: {curtidas}
                </button>
                <button onClick={adicionarDescurtida}>
                    👎: {descurtidas}
                </button>

                {curtidas >= 10 && <span className="popular">POST POPULAR!</span>}

                <p>
                    <em>Tempo de leitura: {time_reading} min.</em>
                </p>

                <p>{article}</p>
            </article>
        </div>
    );
}

export default Post;
