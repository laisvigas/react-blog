import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editarPst, removerPst, buscarPstPorId } from "../../firebase/firestore";
import { Card, Button, Spinner, Container, Row, Col } from "react-bootstrap";

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [curtidas, setCurtidas] = useState(0);
    const [descurtidas, setDescurtidas] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPost() {
            try {
                const postData = await buscarPstPorId(id);
                setPost(postData);
            } catch (error) {
                console.error("Erro ao buscar post:", error);
            }
        }

        fetchPost();
    }, [id]);

    async function removerPost() {
        const confirmacao = window.confirm("Tem certeza que quer excluir o post?");
        if (confirmacao) {
            // Exclui o post
            if (post) {
                await removerPst(post.id);
            }
            // Redireciona para a Home
            navigate("/"); 
        }
    }

    async function editarPost() {
        const titulo = window.prompt("Digite o título", post?.titulo || "");
        if (titulo) {
            await editarPst(post.id, { titulo });
            setPost(prev => ({ ...prev, titulo }));
        }
    }

    function adicionarCurtida() {
        setCurtidas(curtidas + 1);
    }

    if (!post) {
        return (
            <Container className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
                <p>Carregando...</p>
            </Container>
        );
    }

    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Img variant="top" src={post.imagem} alt="Publicação" />
                        <Card.Body>
                            <Card.Title className="fs-3">{post.titulo} 
                                {curtidas > 10 && <p className="mt-3 fs-6 text-success">Post Popular!</p>}
                            </Card.Title>
                            <Card.Text>{post.conteudo}</Card.Text>
                            <Card.Text>
                                <small className="text-muted">Autor: {post.autor}</small>
                            </Card.Text>
                            <div className="d-flex justify-content-start">
                                <Button variant="success" onClick={adicionarCurtida}>
                                    Curtidas: {curtidas}
                                </Button>
                                <Button variant="danger" onClick={() => setDescurtidas(descurtidas + 1)} className="ms-2">
                                    Descurtidas: {descurtidas}
                                </Button>
                            </div>
                            <div className="mt-3 d-flex justify-content-start">
                                <Button variant="warning" onClick={editarPost}>
                                    Editar
                                </Button>
                                <Button variant="outline-danger" onClick={removerPost} className="ms-2">
                                    Excluir
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Post;
