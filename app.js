

// Função para exibir todos os dados
function exibirTodosOsDados() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        resultados += `
    <div class="item-resultado">
        <h2>
            <a href="${dado.instagram}" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
`;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

// Função para pesquisar dados
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if (!campoPesquisa) {
        exibirTodosOsDados(); // Exibe todos os dados se nenhum texto de pesquisa estiver presente
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase();
    console.log("campo-pesquisa");
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
    <div class="item-resultado">
        <h2>
            <a href="${dado.instagram}" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
`;
        }
        console.log(dado.titulo.includes(campoPesquisa));
    }
    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado!</p>";
    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

// Chama a função exibirTodosOsDados quando a página for carregada
document.addEventListener("DOMContentLoaded", function() {
    exibirTodosOsDados();
});
