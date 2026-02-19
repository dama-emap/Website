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
    const icon = document.getElementById('darkModeIcon'); // Pega a imagem
    const zapzap = document.getElementById('whatsappButton');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.src = '/icons/sun.png'; // Troca para imagem do sol
        icon.alt = 'Modo Claro';
        zapzap.src = '/icons/whatsapp_lighter.png'
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.src = '/icons/moon.png'; // Troca para imagem da lua
        icon.alt = 'Modo Escuro';
        localStorage.setItem('darkMode', 'disabled');
        zapzap.src = '/icons/whatsapp.png'
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