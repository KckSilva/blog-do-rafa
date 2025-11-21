// Arquivo de utilitários
const utils = {
    // Função para somar dois números
    somar: function(a, b) {
        return a + b;
    },
    
    // Função para formatar data
    formatarData: function(data) {
        return data.toLocaleDateString('pt-BR');
    },
    
    // Função para validar email
    validarEmail: function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },
    
    // Função para fazer uma requisição HTTP
    fazerRequisicao: async function(url) {
        try {
            const resposta = await fetch(url);
            return await resposta.json();
        } catch (erro) {
            console.error('Erro na requisição:', erro);
            return null;
        }
    }
};