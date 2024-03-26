function buscarPage(){
    console.log('Página Buscar')
    fetch('http://localhost:1717/buscar')
    .then(resposta => resposta.json())
    .then(buscar => {
        console.log('Bem vindos à página Buscar')
    })
    .catch(error => console.error(error))
}

document.addEventListener('DOMContentLoaded', function(){
    console.log('Página totalmente carregada')
    buscarPage();
})
