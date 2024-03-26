function getProdutos() {
    fetch('http://localhost:1717/produtos')
        .then(res => res.json())
        .then(resposta => {
            listaProdutos(resposta, "produtos-ultima");
        })
        .catch(error => console.error(error))

};

function getOfertasDoDia() {
    fetch('http://localhost:1717/ofertas-dia')
        .then(res => res.json())
        .then(ofertas => {
            listaProdutos(ofertas, "ofertasDoDia")

        })
        .catch(error => console.error(error))
};

function getGostos() {
    fetch('http://localhost:1717/podegostar')
    .then(res => res.json())
    .then(gosto =>{
        listaProdutos(gosto,"Vocetmbgostos")
    })
    .catch(error => console.error(error))
    
}

function listaProdutos(produtos, nomeDaLista, BUSCAR ) {

    try {
        var produtosUltima = document.getElementById(nomeDaLista);

        produtos.forEach(function (prod) {

            console.log(prod.namePoste)

            //Criando a div global do card
            var divCard = document.createElement("div");

            //Criando a teg a que deve receber a img do produto
            var a = document.createElement("a");

            //Criando a img que fica dentro do a
            var img = document.createElement("img");

            // Criando o sapn que armazena o valor alterado do produto
            var spanAltValor = document.createElement("span");

            //teg que deicha o valor alterado pequeno.
            var small = document.createElement("small");

            // teg dell que ira add um risco ao valor

            var del = document.createElement("del");

            //span que armazena o valor do produto
            var spanValor = document.createElement("span");

            //Span que deve armazena o svg de entrega 
            var spanEntrega = document.createElement("span");

            // O svg de entrega 
            var svgEntrega = document.createElement("svg");

            //Teg que fica dentro do svg
            var path = document.createElement("path");

            // P que guarda a descrição do produto
            var p = document.createElement("p");

            //Nome de quem postou o produto
            var spanPostName = document.createElement("span");

            //---------------------------------------

            // Adicionando os atributos das tegs

            //Add atributo da div card.
            divCard.setAttribute("class", "card");
            a.setAttribute("href", "#")
            //(1)adicionado a classe da img do produto
            img.setAttribute("class", "card-img")

            //(2)adicionado o src da imagen
            img.setAttribute("src", prod.img);

            //Adicionado a claase da span de alteração~de valor 
            spanAltValor.setAttribute("class", "info-alteração-de-valor");

            //adiionado o valor a teg small 
            del.innerText = prod.valorAlt

            //Adicionado a claase do span de valor
            spanValor.setAttribute("class", "valor-info")
            spanValor.innerText = ("R$" + prod.valor)

            //adicionado a classe ao span que guarda o svg de entrega.
            spanEntrega.setAttribute("class", "info-entrega")
            spanEntrega.innerText = "Frete grátis"

            //Adicionado os atributos do svg
            svgEntrega.setAttribute("viewBox", "0 0 56 18");
            svgEntrega.setAttribute("xmlns", "http://www.w3.org/2000/svg")
            svgEntrega.setAttribute("class", "dynamic-carousel__shipping-container-fulfillment")
            svgEntrega.setAttribute("width", "38px");
            svgEntrega.setAttribute("height", "12px")

            //Atributos do path que esta dentro do svg
            path.setAttribute("d", "M3.545 0L0 10.286h5.91L3.544 18 13 6.429H7.09L10.637 0zm14.747 14H15.54l2.352-10.672h7.824l-.528 2.4h-5.072l-.352 1.664h4.944l-.528 2.4h-4.96L18.292 14zm13.32.192c-3.28 0-4.896-1.568-4.896-3.808 0-.176.048-.544.08-.704l1.408-6.352h2.8l-1.392 6.288c-.016.08-.048.256-.048.448.016.88.688 1.728 2.048 1.728 1.472 0 2.224-.928 2.496-2.176L35.5 3.328h2.784l-1.392 6.336c-.576 2.592-1.984 4.528-5.28 4.528zM45.844 14h-7.04l2.352-10.672h2.752L42.1 11.6h4.272l-.528 2.4zm9.4 0h-7.04l2.352-10.672h2.752L51.5 11.6h4.272l-.528 2.4z")

            path.setAttribute("fill", "#00a650");
            path.setAttribute("fill-rule", "evenodd")

            //(1)Adicionado a caase da teg p.
            p.setAttribute("class", "info-prod");

            //(2)Adicionado o valor do paragrafo.
            p.innerText = prod.info;

            //Add a class oa span post-name
            spanPostName.setAttribute("class", "post-name");
            spanPostName.innerText = ("Por " + prod.namePoste);
            
            //-------------------------------

            // Adicionando os filhos aos seus pais.
            produtosUltima.appendChild(divCard);

            a.appendChild(img);
            divCard.appendChild(a);

            small.appendChild(del)
            spanAltValor.appendChild(small)
            divCard.appendChild(spanAltValor)
            divCard.appendChild(spanValor);

            svgEntrega.appendChild(path);
            spanEntrega.appendChild(svgEntrega);
            divCard.appendChild(spanEntrega);

            //ADD a descrição do produto ao card
            divCard.appendChild(p);
            
            //Adicionado o span de nome do poste dentro da div
            divCard.appendChild(spanPostName);

        })

    } catch (e) {
        console.error(e);
    }

}



document.addEventListener('DOMContentLoaded', function () {
    console.log('Página completamente carregada!')
    getProdutos();
    getOfertasDoDia();
    getGostos();
});