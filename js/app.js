$(document).ready(function () {
    cardapio.eventos.init();
})

var cardapio = {};

cardapio.eventos = {
 init: () => {
    cardapio.metodos.obterItensCardapio()
 }
}

cardapio.metodos = {

    //Obtem a lista de Itens do cardapio
    obterItensCardapio: (categoria = 'burgers', vermais = false) => {

        let filtro = MENU[categoria];
        console.log(filtro)

       $("#itensCardapio").html('')
       $("#btnVerMais").removeClass('hidden')

        $.each(filtro, (i, e) => {

            let temp = cardapio.templates.item.replace(/\${img}/g, e.img)
            .replace(/\${name}/g, e.name)
            .replace(/\${price}/g, e.price.toFixed(2).replace('.' , ','))
            .replace(/\${id}/g, e.id);

            //Botao ver mais
            if(vermais && i >= 8 && i <12) {
                $('#itensCardapio').append(temp)
            }

            //Pagina inicial (8 itens)
            if(!vermais && i < 8) {
                $('#itensCardapio').append(temp)
            }
            

        })

        // remove o ativo
        $(".container-menu a").removeClass('active');

        // seta o menu para ativo
        $("#menu-" + categoria).addClass('active')
    },
}

cardapio.templates = {

    item: `
    <div class="col-3 mb-5">

        <div class="card card-item" id="\${id}">

            <div class="img-produto">
                <img src="\${img}" alt="#">
            </div>
            <p class="title-produto text-center mt-4">
                <strong>\${name}</strong>
            </p>
            <p class="price-produto text-center">
                <strong>R$ \${price}</strong>
            </p>
            <div class="add-carrinho">
                <span class="btn-menos" onclick="cardapio.metodos.diminuirQuantidade('\${id}')"><i class="fas fa-minus"></i></span>
                <span class="add-numero-de-itens" id="qntd-\${id}">0</span>
                <span class="btn-mais" onclick="cardapio.metodos.aumentarQuantidade('\${id}')"><i class="fas fa-plus"></i></span>
                <span class="btn btn-add" onclick="cardapio.metodos.adicionarAoCarrinho('\${id}')"><i class="fas fa-shopping-bag"></i></span>
            </div>
        </div>
    </div>
    `
}