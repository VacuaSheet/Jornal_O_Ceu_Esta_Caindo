function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if (campoPesquisa == "") {
      section.innerHTML = "<p>Nada foi encontrado pois nada foi digitado</p>"
      return
    };
    // Função para remover acentos
    function removerAcentos(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
    campoPesquisa = removerAcentos(campoPesquisa);
    console.log(campoPesquisa)
     
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada dado da pesquisa
    for (let dado of dados) { 
      titulo = dado.titulo;
      descricao = dado.descricao;
      let tags = dado.tags.map(tag => removerAcentos(tag));
      // Constrói o HTML para cada resultado da pesquisa, formatando os dados
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
    }
      if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
      };
      
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }