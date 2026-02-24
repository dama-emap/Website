function changeTab(tabId) {
    // Esconde todas as seções
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Mostra a seção selecionada
    document.getElementById(tabId).classList.add('active');

    // Atualiza os botões ativos (desktop)
    document.querySelectorAll('.nav-menu button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

    // Atualiza os botões ativos (mobile)
    document.querySelectorAll('.mobile-menu button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab-mobile="${tabId}"]`).classList.add('active');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('darkModeIcon');
    const zapzap = document.querySelectorAll('.whatsappButton');
    const download = document.querySelectorAll('.downloadButton');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.src = '/icons/sun.png';
        icon.alt = 'Modo Claro';

        zapzap.forEach(el => {
            el.src = '/icons/whatsapp_lighter.png';
        });

        download.forEach(el => {
            el.src = '/icons/download_lighter.png';
        });

        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.src = '/icons/moon.png';
        icon.alt = 'Modo Escuro';

        zapzap.forEach(el => {
            el.src = '/icons/whatsapp.png';
        });

        download.forEach(el => {
            el.src = '/icons/download.png';
        });

        localStorage.setItem('darkMode', 'disabled');
    }
}


// Carrega a preferência do modo escuro ao abrir a página
window.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    const icon = document.getElementById('darkModeIcon'); // Pega a IMAGEM, não o botão
    
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        icon.src = 'icons/sun.png';           // Troca o SOURCE da imagem
        icon.alt = 'Modo Claro';         // Troca o texto alternativo
    }
});