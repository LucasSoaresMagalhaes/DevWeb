var comentarios = {
    comentario: [
        {
            nome: "Larissa de Macedo Machado",
            coment: "Evento 1 tava perfeito, nada pra acrescentar, 10/10, vlw Douglas",
            data: "25/6/2022"
        },
        {
            nome: "Larissa de Macedo Machado",
            coment: "Salvei a data, só na espera do evento 2",
            data: "26/6/2022"
        },
        {
            nome: "Larissa de Macedo Machado",
            coment: "Algm tem carona pra Cidade Nova?",
            data: "28/6/2022"
        },
        {
            nome: "Larissa de Macedo Machado",
            coment: "Agnt dança na prova pra beber no bar, a vida é uma festa",
            data: "3/6/2022"
        },
        {
            nome: "Larissa de Macedo Machado",
            coment: "Avisando aqui que sábado terá pelada da turma",
            data: "1/7/2022"
        },
        {
            nome: "Larissa de Macedo Machado",
            coment: "Vamos chorar em ATP todos juntos",
            data: "2/7/2022"
        },
        {
            nome: "Larissa de Macedo Machado",
            coment: "if() isso daí mano (sem condição hahaha)",
            data: "3/7/2022"
        },
        {
            nome: "Larissa de Macedo Machado",
            coment: "E o jogo do galão?",
            data: "4/7/2022"
        },
    ]
}

var db_comentario = JSON.parse(localStorage.getItem('comentarios'));
if (!db_comentario) {
    db_comentario = comentarios;    
};


/*var db = JSON.parse(localStorage.getItem('db_contato'));

if (!db) {
    db = db_contato
};*/



function NOVOcomentario(comentario) {

    let novocomentario = {
        nome: comentario.nome,
        coment: comentario.coment,
        data: comentario.data
    };

    // Insere o novo objeto no array
    db_comentario.comentario.push(novocomentario);
    console.log("COMENTARIO inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('comentarios', JSON.stringify(db_comentario));
}