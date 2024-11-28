/* const express = require('express');
const colecaoUF = require('./dados/dados.js'); */
import express from 'express';
import { buscarUfs, buscarUfsPorId, buscarUfsPorNome } from './servicos/servico.js';

const app = express();

/* app.get('/ufs', (req, res) => {
    res.json(colecaoUF);
}); */


app.get('/ufs', (req, res) => {
    /*  */
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "nenhuma UF encontrada" })
    }
    /*  */
});

app.get('ufs/:iduf', (req,res) => {
    const uf =buscarUfsPorId(req.params.iduf);

    if (uf) {
        res.json(uf);
    }else if (isNaN(parseInt(req.params.iduf))) {
        res.status(400).send({"erro":"Requisição inválida"});
    } else {
        res.status(404).send({"erro":"UF não encontrada"});
    }
});


app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if (!(isNaN(idUF))) {
        uf = colecaoUF.find(u => u.id === idUF);

        if (!uf) {
            mensagemErro = "Uf não encontrada";
        }
    } else {
        mensagemErro = "Requisição invalida";
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ "erro": mensagemErro });
    }

});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});
