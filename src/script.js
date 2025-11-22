// ============================
// SCRIPT PRINCIPAL DO BLOG
// ============================

document.addEventListener("DOMContentLoaded", () => {
    console.log("Blog do Rafa carregado!");

    // ============================
    // MENU MOBILE
    // ============================
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    // ============================
    // DARK MODE (tema claro/escuro)
    // ============================
    const themeToggle = document.getElementById("themeToggle");

    // Carregar tema salvo
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.documentElement.classList.toggle("dark");

            const darkMode = document.documentElement.classList.contains("dark");

            if (darkMode) {
                themeToggle.textContent = "☀️"; // modo claro
                localStorage.setItem("theme", "dark");
            } else {
                themeToggle.textContent = "🌙"; // modo escuro
                localStorage.setItem("theme", "light");
            }
        });
    }

    // ============================
    // LISTA DE POSTS RECENTES (exemplo)
    // ============================

    const posts = [
        {
            titulo: "Como começar em DevOps",
            data: "2025-02-10",
            link: "#"
        },
        {
            titulo: "Resumo — Certificação AZ-900",
            data: "2025-02-03",
            link: "#"
        },
        {
            titulo: "TIBCO — Entendendo Steps de Requisições",
            data: "2025-01-25",
            link: "#"
        }
    ];

    const recentList = document.getElementById("recentList");

    if (recentList) {
        posts.forEach(post => {
            const li = document.createElement("li");
            li.classList.add("recent-item");

            li.innerHTML = `
                <a href="${post.link}">
                    <strong>${post.titulo}</strong>
                    <span class="recent-date">${utils.formatarData(new Date(post.data))}</span>
                </a>
            `;

            recentList.appendChild(li);
        });
    }

    // ============================
    // FORMULÁRIO DE ASSINATURA (newsletter)
    // ============================

    const subscribeForm = document.getElementById("subscribeForm");

    if (subscribeForm) {
        subscribeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;

            if (!utils.validarEmail(email)) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            alert("Inscrição realizada com sucesso! 🎉");
            subscribeForm.reset();
        });
    }

    // ============================
    // SCROLL SUAVE PARA ÂNCORAS
    // ============================

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetID = this.getAttribute("href");

            if (targetID.length > 1) {
                e.preventDefault();
                const target = document.querySelector(targetID);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
});
