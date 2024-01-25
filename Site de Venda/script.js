const items = [
    {
        id: 0,
        nome: 'camisas',
        image: 'image.jpg',
        quantidade: 0,
    },
    {
        id: 1,
        nome: 'bermudas',
        image: 'image.jpg',
        quantidade: 0,
    },
    {
        id: 2,
        nome: 'tenis',
        image: 'image.jpg',
        quantidade: 0,
    },
]

inicialiarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        containerProdutos.innerHTML += `
        
        <div class="produto-single">
            <img src="${val.image}" />
            <p>${val.nome}</p>
            <a key="${val.id}" href="#">Adicionar ao carrinho!</a>
        </div>

        `;
    })
}

inicialiarLoja(); 

atualizarCarrinho = () => {

}

var links = documento.get