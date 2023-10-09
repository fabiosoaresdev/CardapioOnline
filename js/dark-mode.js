const btnDarkMode = document.getElementById('btnDarkMode');
const icon = btnDarkMode.querySelector('i');
const body = document.querySelector('body');
const logoSite = document.getElementById('logoSite');
const logoSiteFooter = document.getElementById('logoSiteFooter'); // Adicione esta linha para selecionar o elemento do rodapé

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

    // Alterando a imagem do elemento com ID 'logoSite' com base no modo atual
    if (modoEscuroAtivo) {
        logoSite.src = '/img/logo-dark.png';
        logoSiteFooter.src = '/img/logo-dark.png'; // Altera a imagem do rodapé para logo-dark.png
    } else {
        logoSite.src = '/img/logo.png';
        logoSiteFooter.src = '/img/logo.png'; // Altera a imagem do rodapé para logo.png
    }
});
