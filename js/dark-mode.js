const btnDarkMode = document.getElementById('btnDarkMode');
const icon = btnDarkMode.querySelector('i');
const body = document.querySelector('body');
const logoElement = document.getElementById('logo-cabecalho');

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
    
    // Alterando o logo com base no modo atual
    const isDarkMode = body.classList.contains('dark');
    if (isDarkMode) {
        logoElement.src = 'img/logo-dark.png';
    } else {
        logoElement.src = 'img/logo.png';
    }
});
