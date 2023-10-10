$(document).ready(function () {
    cardapio.eventos.init();
})

var cardapio = {};

var MEU_CARRINHO = [];
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
        
        if(!vermais) {
            $("#itensCardapio").html('')

        }

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

    // clique no botão ver mais
    verMais: () => {
        var ativo = $(".container-menu a.active").attr('id').split('menu-')[1];
        cardapio.metodos.obterItensCardapio(ativo, true)
        $("#btnVerMais").addClass('hidden');
    },

    // diminuir a quantidade do ítem no cardápio.
    diminuirQuantidade: (id) => {
        let qntdAtual = parseInt($("#qntd-" + id).text());

        if (qntdAtual > 0) {
            $("#qntd-" + id).text(qntdAtual - 1)
        }
    },

    // aumentar a quantidade de ítem no cardápio.
    aumentarQuantidade: (id) => {
        let qntdAtual = parseInt($("#qntd-" + id).text());
        $("#qntd-" + id).text(qntdAtual + 1)
    },

    //Adicionar ao Carrinho o item do cardapio
    adicionarAoCarrinho: (id) => {
        
        let qntdAtual = parseInt($("#qntd-" + id).text());

        if (qntdAtual > 0) {
            //obter a categoria ativa
            var categoria = $(".container-menu a.active").attr('id').split('menu-')[1];

            //obter a lista de itens
            let filtro = MENU[categoria];

            //obter o item
            let item = $.grep(filtro, (e,i) => {return e.id == id});

            if (item.length > 0) {
                
                //valida se já existe item no carrinho
                let existe = $.grep(MEU_CARRINHO, (elem,index) => {return elem.id == id})

                // caso já exista, só altera a quantidade
                if (existe.length > 0) {

                    let objIndex = MEU_CARRINHO.findIndex((obj=> obj.id == id))
                    MEU_CARRINHO[objIndex].qntd = MEU_CARRINHO[objIndex].qntd + qntdAtual;
                }

                // caso ainda não exista o item no carrinho, adiciona ele
                else {
                    item[0].qntd = qntdAtual;
                    MEU_CARRINHO.push(item[0]);
                }

                cardapio.metodos.mensagem('Item adicionado ao carrinho','green');
                $("#qntd-" + id).text(0);

                cardapio.metodos.atualizarBadgeTotal();
            }
        }
    },

    // atualiza o badge de totais dos botões do carrinho
    atualizarBadgeTotal: () => {
        var total = 0;
        
        $.each(MEU_CARRINHO, (i,e)=> {
            total += e.qntd
        })

        if (total > 0) {
            $(".botao-carrinho").removeClass('hidden')
            $(".badge-total-carrinho").removeClass("hidden");
        }

        else {
            $(".botao-carrinho").addClass+("hidden")
            $(".badge-total-carrinho").addClass("hidden");
        }
        $(".badge-total-carrinho").html(total);
    },

    // Abrir a modal do carrinho
    abrirCarrinho: (abrir) => {
        if (abrir) {
            $("#modalCarrinho").removeClass('hidden');
            }
        

        else {
            $("#modalCarrinho").addClass('hidden');
        }
    },











    mensagem: (texto, cor = 'red', tempo = 3500) => {

        let id = Math.floor(Date.now() * Math.random()).toString();
        
        let msg = `<div id="msg-${id}" class="animated fadeInDown toast ${cor}">${texto}</div>`;
        
        $("#containerMensagens").append(msg);

        setTimeout(() => {
            $("#msg-" + id).removeClass('fadeInDown');
            $("#msg-" + id).addClass('fadeOutUp');
            setTimeout(() => {
                $("#msg-" + id).remove();
            },800)
        }, tempo)
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