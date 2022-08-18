var reclamacoes = {
    reclamacao: [
        {
            nome: "larissademacedomachado@sga.pucminas.com",
            coment: "Projetor da sala J5 não funciona",
            data: "25/6/2022"
        },
        {
            nome: "dwainejhonson@sga.pucminas.com",
            coment: "A porta está agarrando",
            data: "26/6/2022"
        },
        {
            nome: "arnold@sga.pucminas.com",
            coment: "O quadro da I302 está borrado",
            data: "28/6/2022"
        },
        {
            nome: "palhares@sga.pucminas.com",
            coment: "Preciso de adaptador para a tomada da J1",
            data: "3/6/2022"
        },
        {
            nome: "joanadark@sga.pucminas.com",
            coment: "Os ventiladores da J5 não estão funcionando",
            data: "1/7/2022"
        },
        {
            nome: "jhoncena@sga.pucminas.com",
            coment: "Luz piscando na J5 está me deixando louco",
            data: "2/7/2022"
        }
    ]
}

var db_reclamacao = JSON.parse(localStorage.getItem('reclamacoes'));
if (!db_reclamacao) {
    db_reclamacao = reclamacoes;    
};

function NOVOreclamacao(reclamacao) {

    let novoreclamacao = {
        nome: reclamacao.nome,
        coment: reclamacao.coment,
        data: reclamacao.data
    };

    // Insere o novo objeto no array
    db_reclamacao.reclamacao.push(novoreclamacao);
    console.log("reclamacao inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('reclamacoes', JSON.stringify(db_reclamacao));
}