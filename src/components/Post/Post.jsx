import { useState, useEffect } from "react";
import "./Post.css";

function Post({ title, author, image, article, time_reading }) {
    const [curtidas, setCurtidas] = useState(0);
    const [descurtidas, setDescurtidas] = useState(0);
    const [carregando, setCarregando] = useState(true);

    function adicionarCurtida() {
        setCurtidas(curtidas + 1);
    }

    function adicionarDescurtida() {
        setDescurtidas(descurtidas + 1);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCarregando(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (carregando) {
        return (
            <div className="post">
                <p>Carregando...</p>
            </div>
        );
    }

    function mostrarAlerta() {
        alert(`Matéria: ${title}\nAutor: ${author}\nTempo de Leitura: ${time_reading}min.\nPessoas que gostaram: ${curtidas}\nPessoas que não gostaram muito: ${descurtidas}`);
    }
    

    return (
        <div className="post">
        <article>
            <h1>{title}</h1>
            <div>
                <img src={image} alt="Post" />
                {/* <small><em>Artigo de {author}</em></small> */}
            </div>

            <button onClick={adicionarCurtida}>
                👍: {curtidas}
            </button>
            <button onClick={adicionarDescurtida}>
                👎{/* {descurtidas} */}
            </button>

            {curtidas >= 10 && <span className="popular">POST POPULAR!</span>}

            <p>
                <em>Tempo de leitura: {time_reading} min.</em>
            </p>

            <p>{article}</p>

            <button onClick={mostrarAlerta}>
                Informações do Post
            </button>
        </article>
    </div>
    );
}

export default Post;
