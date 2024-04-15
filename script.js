
//função para emular maquina de escrever 
//----------------------> Inicio Maquina de Escrever
function KeyWritring(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() =>
            elemento.innerHTML += letra, 100 * i);
    });
}

const Mim = document.querySelector('.sobre-mim');
const TextoEscri = document.querySelector('.textomeu');
const HELLO = document.querySelector('.HelloEve');
KeyWritring(HELLO);
KeyWritring(Mim);
KeyWritring(TextoEscri);
//--------------------> Fim Maquina de Escrever


//---------------------------sistema teste
var div = document.getElementById('log');
var textos = ['Olá, Me chamo Filippi e sou um desenvolvedor de Software'
, ' Estudo Ciências da Computação Pela Universidade Federal de Sergipe.',
  'Sou fã de Rock, artes e mangás de Boxe.'
, 'Gosto de Ler, escrever textos e codigos e aprecio as Obras de Naoki Urasawa.'
, 'Nossa vida sempre expressa o resultado de nossos pensamentos dominantes. Soren Kierkegaard'];

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 500); // só para esperar um bocadinho
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 100);
}

function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 50);
}

function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function(){
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);