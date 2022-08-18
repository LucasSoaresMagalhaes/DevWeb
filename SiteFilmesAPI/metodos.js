/*************
SAMPLE URLS
 
1. To get the config data like image base urls
https://api.themoviedb.org/3/configuration?api_key=<APIKEY>
 
2. To fetch a list of movies based on a keyword
https://api.themoviedb.org/3/search/movie?api_key=<APIKEY>&query=<keyword>
 
3. To fetch more details about a movie
https://api.themoviedb.org/3/movie/<movie-id>?api_key=<APIKEY>
*************/
//const APIKEY is inside key.js
let baseURL = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImageURL = null;
let baseVideoURL = "https://www.youtube.com/embed/";
const APIKEY = "4c7b64cb66dc7ea81ad474109e62ba56&language=pt-BR";

let getConfig = function () {
    let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
    fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            baseImageURL = data.images.secure_base_url;
            configData = data.images;
            console.log('config:', data);
            console.log('config fetched');
            latest();
            destaques();
        })

        .catch(function (err) {
            alert(err);
        });
}

let runSearch = function (keyword) {
    document.getElementById('pesquisar').style.display="block";
    let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
    fetch(url)
        .then(result => result.json())
        .then((data) => {
            //process the returned data
            console.log(JSON.stringify(data, null, 4));
            //work with results array...
            document.getElementById('titulofilme').innerHTML = data.results[0].title;
            document.getElementById('resumopesquisa').innerHTML = data.results[0].overview;
            pegarIMG(data.results[0].title, "poster")
            document.getElementById('notapesquisa').innerHTML = data.results[0].vote_average;
            document.getElementById('popularidade').innerHTML = data.results[0].popularity;
            document.getElementById('lancamento').innerHTML = data.results[0].release_date;
            let id = data.results[0].id;

            let url2 = ''.concat(baseURL, 'movie/', id, '?api_key=', APIKEY);
            fetch(url2)
                .then(result2 => result2.json())
                .then((data2) => {

                    document.getElementById('orcamento').innerHTML = '$' + data2.budget + ',00';
                    document.getElementById('tituloring').innerHTML = data2.original_title;
                    document.getElementById('leanguagem').innerHTML = data2.original_language;
                    document.getElementById('generos').innerHTML='';
                    for (i = 0; i < data2.genres.length; i++) {
                        document.getElementById('generos').innerHTML += '<li>' + data2.genres[i].name + '</li>'
                        document.getElementById('homepage').setAttribute('href',data2.homepage)
                    }
                })

        })
}

let pegarlink = function(id,seletor){
    let url = ''.concat(baseURL,'movie/',id,'?api_key=',APIKEY);
    fetch(url)
        .then(result => result.json())
        .then((data)=>{
            console.log(data)
            document.getElementById(seletor) = data.homepage;
        })
}

let latest = function () {
    let url = ''.concat(baseURL, 'movie/upcoming?api_key=', APIKEY);
    fetch(url)
        .then(result => result.json())
        .then((data) => {
            let titulo1 = data.results[0].title
            let resumo1 = data.results[0].overview
            let lancamento1 = data.results[0].release_date
            let nota1 = data.results[0].vote_average
            let original1 = data.results[0].original_title
            pegarVIDEO(data.results[0].id, "videon1");

            document.getElementById('pnovidade1').innerHTML = titulo1;
            document.getElementById('resumenovidade1').innerHTML = resumo1;
            document.getElementById('estreian1').innerHTML = lancamento1;
            document.getElementById('notan1').innerHTML = " " + nota1;
            document.getElementById('origintn1').innerHTML = " " + original1;

            let titulo2 = data.results[1].title
            let resumo2 = data.results[1].overview
            let lancamento2 = data.results[1].release_date
            let nota2 = data.results[1].vote_average
            let original2 = data.results[1].original_title
            pegarVIDEO(data.results[1].id, "videon2");

            document.getElementById('pnovidade2').innerHTML = titulo2
            document.getElementById('resumenovidade2').innerHTML = resumo2
            document.getElementById('estreian2').innerHTML = lancamento2
            document.getElementById('notan2').innerHTML = " " + nota2
            document.getElementById('origintn2').innerHTML = " " + original2

            let titulo3 = data.results[3].title
            let resumo3 = data.results[3].overview
            let lancamento3 = data.results[3].release_date
            let nota3 = data.results[3].vote_average
            let original3 = data.results[3].original_title
            pegarVIDEO(data.results[3].id, "videon3");

            document.getElementById('pnovidade3').innerHTML = titulo3
            document.getElementById('resumenovidade3').innerHTML = resumo3
            document.getElementById('estreian3').innerHTML = lancamento3
            document.getElementById('notan3').innerHTML = " " + nota3
            document.getElementById('origintn3').innerHTML = " " + original3

        })
}

let destaques = function () {
    let url = ''.concat(baseURL, 'movie/popular?api_key=', APIKEY);
    fetch(url)
        .then(result => result.json())
        .then((data) => {

            pegarIMG(data.results[0].title, "cartaz1")
            pegarlink(data.results[0].id,"linkcartaz1")
            pegarIMG(data.results[1].title, "cartaz2")
            pegarIMG(data.results[2].title, "cartaz3")
            pegarIMG(data.results[3].title, "cartaz4")
            pegarIMG(data.results[4].title, "cartaz5")
            pegarIMG(data.results[5].title, "cartaz6")
            pegarIMG(data.results[12].title, "cartaz7")
            pegarIMG(data.results[7].title, "cartaz8")
            pegarIMG(data.results[8].title, "cartaz9")
            pegarIMG(data.results[9].title, "cartaz10")
            pegarIMG(data.results[10].title, "cartaz11")
            pegarIMG(data.results[11].title, "cartaz12")

        })
}

let pegarIMG = function (keyword, seletor) {
    let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
    fetch(url)
        .then(result => result.json())
        .then((data) => {

            //work with results array...

            let source = baseImageURL + "w780" + data.results[0].poster_path

            document.getElementById(seletor).setAttribute('src', source);

        })
}

let pegarVIDEO = function (titulo, seletor) {
    let url = ''.concat(baseURL, 'movie/' + titulo + '/videos?api_key=', APIKEY);
    fetch(url)
        .then(result => result.json())
        .then((data) => {

            //work with results array...

            let source = baseVideoURL + data.results[0].key;
            document.getElementById(seletor).setAttribute('src', source);

        })
}

document.addEventListener('DOMContentLoaded', getConfig);
            /*******************************
SAMPLE SEARCH RESULTS DATA
{ "vote_count": 2762, 
"id": 578, 
"video": false, 
"vote_average": 7.5, 
"title": "Jaws", 
"popularity": 16.273358, 
"poster_path": "/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg", 
"original_language": "en", 
"original_title": "Jaws", 
"genre_ids": [ 27, 53, 12 ], 
"backdrop_path": "/slkPgAt1IQgxZXNrazEcOzhAK8f.jpg", 
"adult": false, 
"overview": "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.", 
"release_date": "1975-06-18" 
}
*******************************/