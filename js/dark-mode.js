const btnDarkMode = document.getElementById('btnDarkMode');
const icon = btnDarkMode.querySelector('i');
const body = document.querySelector('body');

let modoEscuroAtivo = body.classList.contains('dark'); // Alterado de const para let

btnDarkMode.addEventListener('click', function() {
    if (modoEscuroAtivo) {
        body.classList.remove('dark');
        icon.classList.remove('fa-cloud-moon'); // Removendo a classe 'fa-cloud-moon' do ícone
        icon.classList.add('fa-cloud-sun'); // Adicionando a classe 'fa-cloud-sun' ao ícone
        modoEscuroAtivo = false;
    } else {
        body.classList.add('dark');
        icon.classList.remove('fa-cloud-sun'); // Removendo a classe 'fa-cloud-sun' do ícone
        icon.classList.add('fa-cloud-moon'); // Adicionando a classe 'fa-cloud-moon' ao ícone
        modoEscuroAtivo = true;
    }
});



