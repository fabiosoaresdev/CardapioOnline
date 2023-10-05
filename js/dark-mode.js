const btnDarkMode = document.getElementById('btnDarkMode');
const icon = btnDarkMode.querySelector('i');
const body = document.querySelector('body');
const logoElementCabecalho = document.getElementById('logo-cabecalho');
const logoElementFooter = document.querySelector('.logo-footer'); // Seleciona o logo do footer

let modoEscuroAtivo = body.classList.contains('dark');

btnDarkMode.addEventListener('click', function() {
    // Alterando a classe 'dark' do corpo para alternar entre os modos
    body.classList.toggle('dark');
    
    // Alterando o ícone com base no modo atual
    if (modoEscuroAtivo) {
        icon.classList.remove('fa-cloud-moon');
        icon.classList.add('fa-cloud-sun');
        modoEscuroAtivo = false;
    } else {
        icon.classList.remove('fa-cloud-sun');
        icon.classList.add('fa-cloud-moon');
        modoEscuroAtivo = true;
    }
    
    // Alterando o logo do cabeçalho com base no modo atual
    const isDarkMode = body.classList.contains('dark');
    if (isDarkMode) {
        logoElementCabecalho.src = 'img/logo-dark.png';
    } else {
        logoElementCabecalho.src = 'img/logo.png';
    }

    // Alterando o logo do footer com base no modo atual
    if (isDarkMode) {
        logoElementFooter.src = 'img/logo-dark.png';
    } else {
        logoElementFooter.src = 'img/logo.png';
    }
});
