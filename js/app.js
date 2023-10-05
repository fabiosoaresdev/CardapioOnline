const btnMeuCarrinho = document.getElementById('btnMeuCarrinho');
const modalCarrinho = document.getElementById('modal-carrinho');

btnMeuCarrinho.addEventListener('click', function() {
    // Remover a propriedade 'hidden' da modal
    modalCarrinho.removeAttribute('hidden');
});
