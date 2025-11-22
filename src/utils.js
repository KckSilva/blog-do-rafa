// ==============================================
// utils.js — Biblioteca de utilidades do Blog
// ==============================================
// Todas as funções aqui são globais e usadas pelo script.js
// ==============================================

const utils = {

    // ------------------------------
    // Soma (função demonstrativa)
    // ------------------------------
    somar: function(a, b) {
        return Number(a) + Number(b);
    },

    // ------------------------------
    // Formatar data (dd/mm/aaaa)
    // ------------------------------
    formatarData: function(data) {
        if (!(data instanceof Date)) {
            data = new Date(data);
        }

        return data.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    },

    // ------------------------------
    // Validar email
    // ------------------------------
    validarEmail: function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).trim());
    },

    // ------------------------------
    // Fazer requisição HTTP GET
    // ------------------------------
    fazerRequisicao: async function(url) {
        try {
            const resposta = await fetch(url);

            if (!resposta.ok) {
                console.error("Erro HTTP:", resposta.status);
                return null;
            }

            return await resposta.json();
        } catch (erro) {
            console.error("Erro na requisição:", erro);
            return null;
        }
    },

    // ------------------------------
    // Gerar slug URL-friendly
    // ex: "Resumo AZ-900" → "resumo-az-900"
    // ------------------------------
    gerarSlug: function(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // remove acentos
            .replace(/[^a-z0-9]+/g, "-")     // troca caracteres inválidos por hífen
            .replace(/^-+|-+$/g, "");        // remove hífens extras
    },

    // ------------------------------
    // Limitar texto para previas de post
    // ------------------------------
    limitarTexto: function(texto, limite) {
        if (texto.length <= limite) return texto;
        return texto.substring(0, limite).trim() + "...";
    },

    // ------------------------------
    // Salvar e carregar dados simples do LocalStorage
    // ------------------------------
    salvarLocal: function(chave, valor) {
        localStorage.setItem(chave, JSON.stringify(valor));
    },

    carregarLocal: function(chave) {
        const item = localStorage.getItem(chave);
        return item ? JSON.parse(item) : null;
    }
};

