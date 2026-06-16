const abrirMenu = document.getElementById("abrirMenu");
const menu = document.getElementById("menu");
const closeUserMenuBtn = document.getElementById("closeUserMenu");
const overlayUser = document.getElementById("overlayUser");
const sidebar = document.getElementById("sidebar");

function openUserMenu() {
    // Não permite abrir se o menu esquerdo está aberto
    if (sidebar && sidebar.classList.contains("active")) {
        return;
    }
    menu.classList.add("ativo");
    abrirMenu.classList.add("ativo");
    if (overlayUser) overlayUser.classList.add("active");
}

function closeUserMenu() {
    menu.classList.remove("ativo");
    abrirMenu.classList.remove("ativo");
    if (overlayUser) overlayUser.classList.remove("active");
}

if (abrirMenu) {
    abrirMenu.addEventListener("click", openUserMenu);
}

if (closeUserMenuBtn) {
    closeUserMenuBtn.addEventListener("click", closeUserMenu);
}

