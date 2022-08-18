function resultado(conta,x,y){
    let final;
    console.log(conta)
    switch (conta) {
        case 1:
            final = x+y;
            break;
        case 2:
            final = x*y;
            break;
        case 3:
            final = x/y;
            break;
        case 4: 
            final = x-y
            break;
        default:
            console.log("DEU RUIM")
            break;
    }
    return final
}

function preenchimento(x){
    if(x==999){
        document.getElementById("tela").value=""
        document.getElementById("tela").placeholder = "Hora de contar"

    }
    else
    document.getElementById("tela").value+=x
}