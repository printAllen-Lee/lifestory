var id =()=> {return Math.floor(Math.random() * 100+ 1)}

var   audio = [
    
    { id: id(), name: 'iphone G9 Play', namePoste:"jota", valor: "690.90",  img: "https://http2.mlstatic.com/D_Q_NP_839182-MLA49040256756_022022-W.webp", info: 'Impressora a cor multifuncional HP Deskjet Ink Advantage 2774 com wifi preta', qtd: 12.000, valorAlt:780.00}

    ,

    { id: id(), name: 'Impressora', namePoste:"Erik", valor: "590.00", img: "https://http2.mlstatic.com/D_Q_NP_876877-MLA48317871429_112021-P.webp", info: 'Moto E20 Dual SIM 32 GB cinza 2 GB RAM', qtd: 12.000,valorAlt:"450.00" }

    ,

    { id: id(), name: 'iphone xr G8 Play', namePoste:"Mundo femino",  valor: "450.00", img: "https://http2.mlstatic.com/D_NQ_NP_2X_813818-MLB49600487096_042022-F.webp" , info: 'Relógio Feminino Champion Digital Espelhado Dourado Ou Rose', qtd: 12.000,valorAlt:"291.21"}

    ,

    { id: id(), name: 'iphone xr 10 G6 Play', namePoste:"word Cell", valor: "904.00", img: "https://http2.mlstatic.com/D_Q_NP_944247-MLA48254501665_112021-W.webp", info: 'Moto E20 Dual SIM 32 GB cinza 2 GB RAM', qtd: 1.908,valorAlt:"857.00"}

]

module.exports = audio;