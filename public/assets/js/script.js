document.addEventListener("DOMContentLoaded", () => {
    // Seletores do Menu
    const openMenuBtn = document.getElementById("openMenu");
    const closeMenuBtn = document.getElementById("closeMenu");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const menu = document.getElementById("menu");

    
    const abrirMenuImg = document.getElementById("abrirMenu");

    // --- Lógica do Menu ---
    function toggleMenu() {
        // Não permite abrir se o menu direito está aberto
        if (menu && menu.classList.contains("ativo")) {
            return;
        }
        if (sidebar) sidebar.classList.toggle("active");
        if (overlay) overlay.classList.toggle("active");
        if (openMenuBtn) openMenuBtn.classList.toggle("active");
        if (abrirMenuImg) abrirMenuImg.classList.toggle("darkened");
    }

    if (openMenuBtn) openMenuBtn.onclick = toggleMenu;
    if (closeMenuBtn) closeMenuBtn.onclick = toggleMenu;

    // Fecha as sugestões ao clicar fora
    const searchInput = document.getElementById("searchInput");
    const suggestionsList = document.getElementById("suggestionsList");

    if (searchInput && suggestionsList) {
        document.addEventListener("click", (e) => {
            if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
                suggestionsList.classList.remove("active");
            }
        });
    }
    }
);