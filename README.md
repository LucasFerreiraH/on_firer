

# On Firer

On Firer é uma loja de roupas cristãs com um modelo de e-commerce. Este projeto é uma aplicação web que apresenta duas coleções lançadas pela marca: uma blusa de frio e uma camiseta. O objetivo é permitir que os usuários pesquisem e visualizem as coleções disponíveis, acessando mais informações através de links diretos para as páginas dos produtos e redes sociais.

## Funcionalidades

- **Exibição de Produtos**: A página inicial carrega todos os produtos disponíveis para visualização.
- **Pesquisa de Produtos**: Usuários podem pesquisar por palavras-chave relacionadas aos produtos. A pesquisa é realizada por título, descrição e tags dos produtos.
- **Links para Mais Informações**: Cada item exibido possui links para a página do produto e para o Instagram da marca, oferecendo acesso direto a mais detalhes e informações.

## Tecnologias Utilizadas

### HTML

- **Estrutura da Página**: Define a estrutura básica da página, incluindo cabeçalho, seção principal com campo de pesquisa e botão, e a seção de resultados da pesquisa.
- **Elementos de Navegação**: Inclui um formulário de pesquisa e um layout para exibir os produtos encontrados.

### CSS

- **Estilização Visual**: Define a aparência da página, incluindo fontes, cores, e layout responsivo.
- **Layout e Design**: Utiliza Flexbox para layout e media queries para garantir que a página seja responsiva em diferentes tamanhos de tela.
- **Temas e Cores**: Aplica um tema visual coeso que combina uma imagem de fundo com gradientes e estilizações específicas para botões e caixas de resultado.

### JavaScript

- **Função `exibirTodosOsDados()`**: Exibe todos os dados de produtos na página inicial.
- **Função `pesquisar()`**: Permite aos usuários buscar produtos por palavras-chave, filtrando os resultados com base em título, descrição e tags.
- **Manipulação do DOM**: Atualiza dinamicamente a página com os resultados da pesquisa ou todos os dados quando a página é carregada.

## Estrutura do Projeto

- **index.html**: Contém a estrutura HTML da aplicação.
- **style.css**: Arquivo de estilos CSS que define a aparência e o layout da página.
- **app.js**: Contém o código JavaScript responsável pela lógica de exibição e pesquisa dos produtos.
- **dados.js**: Contém os dados dos produtos (títulos, descrições, links e tags).

