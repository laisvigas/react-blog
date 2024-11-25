import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./firebase.config";

const db = getFirestore(app);

//addDoc
//updateDoc
//deletDoc
//getDoc

async function salvar(dados) {
    const usuarios = collection(db, "usuarios");
    await addDoc(usuarios, dados);
    console.log("Usuário criado");
}

async function buscar() {
    const usuarios = collection(db, "usuarios");
    const resultados = await getDocs(usuarios);
    const objetos = [];
    resultados.forEach(doc => { 
            const usuario = doc.data();
            usuario.id = doc.id;
            objetos.push(usuario)
        });
        console.log(objetos);
        return objetos; 
}

export { salvar, buscar };
