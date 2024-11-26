import { addDoc, collection, deleteDoc, getDocs, getFirestore, doc, updateDoc } from "firebase/firestore";
import app from "./firebase.config";

const db = getFirestore(app);

//addDoc
//updateDoc
//deletDoc
//getDoc

async function salvarUs(dados) {
    const usuarios = collection(db, "usuarios");
    await addDoc(usuarios, dados);
    console.log("Usuário criado");
}

async function buscarUs() {
    const usuarios = collection(db, "usuarios");
    const resultados = await getDocs(usuarios);
    const objetos = [];
    resultados.forEach(doc => { 
            const usuario = doc.data();
            usuario.id = doc.id;
            objetos.push(usuario)
        });
        return objetos; 
}

async function removerUs(id) {
    const usuarios = collection(db, "usuarios");
    const documento = doc(usuarios, id);
    await deleteDoc(documento);
}

async function editarUs(id, dados) {
    const usuarios = collection(db, "usuarios");
    const documento = doc(usuarios, id);
    await updateDoc(documento, dados);
}

async function salvarPost(dados) {
    const posts = collection(db, "posts")
    await addDoc(posts, dados);
    console.log("Post criado")
}

async function buscarPost() {
    const posts = collection(db, "posts");
    const resultados = await getDocs(posts);
    const objetos = [];
    resultados.forEach(doc => { 
            const post = doc.data();
            post.id = doc.id;
            objetos.push(post)
        });
        return objetos; 
}

async function removerPost(id) {
    const posts = collection(db, "posts");
    const documento = doc(posts, id);
    await deleteDoc(documento);
}

async function editarPost(id, dados) {
    const posts = collection(db, "posts");
    const documento = doc(posts, id);
    await updateDoc(documento, dados);
}

export { salvarUs, buscarUs, removerUs, editarUs, salvarPost, buscarPost, removerPost, editarPost };
