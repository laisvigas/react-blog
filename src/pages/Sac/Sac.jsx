import Form from "../../components/Form/Form";
import "./Sac.css"

const ajudas = [
    {
        pergunta: "Quais são os benefícios do Alice Vigas Yoga?",
        resposta:
            "O Alice Vigas Yoga combina práticas tradicionais e modernas que promovem o equilíbrio físico e mental, redução do estresse e aumento da flexibilidade.",
    },
    {
        pergunta: "Como posso me inscrever nas aulas?",
        resposta:
            "Você pode se inscrever diretamente pelo nosso site na seção 'Inscreva-se' ou entrar em contato pelo WhatsApp disponível na página inicial.",
    },
    {
        pergunta: "Preciso de experiência prévia para participar?",
        resposta:
            "Não, nossas aulas são projetadas para atender todos os níveis, desde iniciantes até praticantes avançados.",
    },
    {
        pergunta: "Quais equipamentos são necessários para as aulas?",
        resposta:
            "Recomendamos um tapete de yoga, roupas confortáveis e, opcionalmente, blocos ou uma faixa para maior suporte durante as práticas.",
    },
    {
        pergunta: "Há aulas disponíveis online?",
        resposta:
            "Sim, oferecemos aulas ao vivo e gravadas que você pode acessar de qualquer lugar. Basta se inscrever em nosso plano online.",
    },
];

function Sac() {
    return (
        <div className="sac-container">
            <Form />
            <div className="faq-section">
                <h2>Perguntas Frequentes</h2>
                <div className="faq-grid">
                    {ajudas.map((ajuda, index) => (
                        <div className="faq-item" key={index}>
                            <h3>{ajuda.pergunta}</h3>
                            <p>{ajuda.resposta}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sac;
