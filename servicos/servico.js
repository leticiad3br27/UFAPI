import colecaoUF from "./dados/dados";

export const buscarUfs = () => {
    return colecaoUF;
}

export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUF.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUfsPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUF.find(uf => uf.id === idUF);
}
