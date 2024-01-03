var dicionario1;

fetch('comarca.json')
.then(resposta => resposta.json())
.then(json => dicionario1 = dicionario(json));

function dicionario(json){
    const result = {};

    json.forEach((obj) => {
        const polo = obj.polo;
        for (let i = 1; obj[`comarca${i}`]; i++) {
            const comarca = obj[`comarca${i}`];
            result[comarca] = polo;
          }
    });
    return result;
};

const comarca = document.querySelector('.input-comarca');

document.addEventListener('submit', (e) => {
    e.preventDefault();
    var resultado = capturaComarca(comarca.value);
});

function capturaComarca(comarca){
    const divPolo = document.querySelector('.polo');
    divPolo.innerHTML =  `A comarca Polo é: ${dicionario1[comarca]}.`;
}



