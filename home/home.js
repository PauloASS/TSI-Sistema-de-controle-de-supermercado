const inProduto = document.getElementById("inProduto");
const inCategoria = document.getElementById("inCategoria");
const inMarca = document.getElementById("inMarca");
const inPreco1 = document.getElementById("inPreco1");
const inPreco2 = document.getElementById("inPreco2");
const btFiltrar = document.getElementById("btFiltrar");
const btCarrinhoJs = document.getElementById("btCarrinhoJs")
const outProdutos = document.getElementById("outProdutos");
const outCarrinho = document.getElementById("outCarrinho");
const btFecharCarrinho = document.getElementById("btFecharCarrinho")

var vetProduto = ['Achocolatado', 'Achocolatado', 'Achocolatado', 'Açúcar Cristal', 'Açúcar Cristal', 'Açúcar Refinado', 'Açúcar Refinado', 'Arroz Agulhinha Tipo 1', 'Arroz Agulhinha Tipo 1', 'Arroz Agulhinha Tipo 1', 'Café Torrado moído', 'Café Torrado moído', 'Café Torrado moído', 'Café Torrado moído', 'Ervilha em Conserva', 'Ervilha em Conserva', 'Extrato de Tomate', 'Extrato de Tomate (Molho de tomate)', 'Farinha de Mandioca', 'Farinha de Mandioca', 'Farinha de Trigo', 'Farinha de Trigo', 'Farinha de Trigo', 'Feijão Carioca', 'Feijão Carioca', 'Feijão Carioca', 'Feijão Preto', 'Feijão Preto', 'Feijão Preto', 'Leite Longa Vida Integral', 'Leite Longa Vida Integral', 'Leite Longa Vida Desnatado', 'Leite Longa Vida Desnatado', 'Macarrão Espaguete', 'Macarrão Espaguete', 'Macarrão Espaguete', 'Macarrão Parafuso', 'Macarrão Parafuso', 'Macarrão Parafuso', 'Margarina', 'Margarina', 'Margarina', 'Margarina', 'Milho Verde', 'Milho Verde', 'Óleo de Soja', 'Óleo de Soja', 'Óleo de Soja', 'Pão de Forma', 'Pão de Forma', 'Pão Francês', 'Sal Refinado', 'Sal Refinado', 'Sardinha em lata', 'Sardinha em lata', 'Sardinha em lata', 'Tempero Completo', 'Tempero Completo', 'Vinagre', 'Vinagre', 'Absorvente com aba', 'Absorvente com aba', 'Absorvente com aba', 'Absorvente sem aba', 'Absorvente sem aba', 'Absorvente sem aba', 'Água Sanitária', 'Água Sanitária', 'Amaciante', 'Amaciante', 'Creme Dental', 'Creme Dental', 'Creme Dental', 'Creme Dental', 'Desinfetante', 'Desinfetante', 'Detergente Líquido', 'Detergente Líquido', 'Detergente Líquido', 'Lã de Aço', 'Lã de Aço', 'Lã de Aço', 'Papel Higiênico Folha Dupla Rolo c/04 unidades', 'Papel Higiênico Folha Dupla Rolo c/ 12 unidades', 'Papel Higiênico Folha Dupla Rolo c/24 unidades', 'Papel Higiênico Folha Simples Rolo c/04 unidades', 'Papel Higiênico Folha Simples Rolo c/12 unidades', 'Papel Higiênico Folha Simples Rolo c/24 unidades', 'Sabão em barra', 'Sabão em barra', 'Sabão em barra', 'Sabão em Pó', 'Sabão em Pó', 'Sabão em Pó', 'Sabão em Pó', 'Sabonete', 'Sabonete', 'Sabonete', 'Sabonete', 'Sabonete', 'Alface', 'Alho', 'Banana', 'Batata', 'Cebola', 'Cenoura', 'Cebolinha Verde', 'Limão', 'Pepino', 'Salsinha', 'Tomate', 'Ovos Brancos', 'Acém', 'Bisteca Sem filé', 'Miolo de Paleta bife', 'Carne moída de 1º', 'Carne moída de 2º', 'Costela Ripa', 'Costelinha (sem pele)', 'Bisteca da copa', 'Frango inteiro resfriado', 'Linguiça Toscana', 'Paleta (com osso e com pele)', 'Pernil (com osso e com pele)'];

var vetCategoria = ['Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)'];

var vetEspecifica = ['Nescau', 'Toddy', 'Menor Preço', 'Alto Alegre', 'Menor Preço', 'Alto Alegre', 'Menor Preço', 'Zaeli', 'Tio João', 'Menor Preço', 'Cocamar', 'Jandaia', 'Itamaraty', 'Menor Preço', 'Quero', 'Menor Preço', 'Elefante', 'Pomarola', 'Pinduca', 'Menor Preço', 'Sol', 'Anaconda', 'Menor Preço', 'Martinelli', 'De Ouro', 'Menor Preço', 'Martinelli', 'De Ouro', 'Menor Preço', 'Líder', 'Menor Preço', 'Líder', 'Menor Preço', 'Galo', 'Renata', 'Menor Preço', 'Renata', 'Galo', 'Menor Preço', 'Qualy', 'Doriana', 'Delícia', 'Menor Preço', 'Quero', 'Menor Preço', 'Cocamar', 'Liza', 'Menor Preço', 'Pullman', 'Menor Preço', '-', 'Cisne', 'Menor Preço', 'Coqueiro', 'Gomes da Costa', 'Menor Preço', 'Ami', 'Menor Preço', 'Castelo', 'Menor Preço', 'Intimus', 'Sempre Livre', 'Menor Preço', 'Intimus', 'Sempre Livre', 'Menor Preço', 'Qboa', 'Menor Preço', 'Confort', 'Menor Preço', 'Close-up', 'Sorriso', 'Colgate', 'Menor Preço', 'Pinho-Sol', 'Menor Preço', 'Ypê', 'Limpol', 'Menor Preço', 'Bom Bril', 'Assolan', 'Menor Preço', 'Menor Preço', 'Menor Preço', 'Menor Preço', 'Menor Preço', 'Menor Preço', 'Menor Preço', 'Alpes', 'Ypê', 'Menor Preço', 'Omo', 'Brilhante', 'Ypê', 'Menor Preço', 'Francis', 'Lux', 'Dove', 'Palmolive', 'Menor Preço', 'Crespa', 'Importado', 'Caturra/nanica', 'Monalisa', 'Nacional', '-', '-', 'Taiti', 'Japonês', '-', 'Menor Preço', '-', 'Bovino', 'Bovino', 'Bovino', 'Bovino', 'Bovino', 'Bovino', 'Suína', 'Suína', 'Frango', 'Frimesa', 'Suino', 'Suíno'];

var vetUm = ['400g', '400g', '400g', '5 Kg', '5 Kg', '1 Kg', '1 Kg', '5 Kg', '5 Kg', '5 Kg', '500g', '500g', '500g', '500g', '200g', '200g', '340g', '340g', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1Kg', '1 L', '1 L', '1 L', '1 L', '500g', '500g', '500g', '500g', '500g', '500g', '500g', '500g', '500g', '500g', '200g', '200g', '900ml', '900ml', '900ml', '500g', '500g', 'Kg', '1Kg', '1 Kg', '125g', '125g', '125g', '300g', '300g', '750ml', '750ml', '8 un.', '8 un.', '8 un.', '8 un.', '8 un.', '8 un.', '1 L', '1 L', '2 L', '2 L', '90g', '90g', '90g', '90g', '500ml', '500ml', '500ml', '500ml', '500ml', 'Pcte', 'Pcte', 'Pcte', '30m', '30m', '30m', '60m', '60m', '60m', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '90g', '85g', '90g', '90g', '84g-90g', 'Un.', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', '1 Dúzia', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg'];

var vetValor = [7.28, 7.39, 5.79, 11.99, 14.57, 3.39, 3.39, 15.99, 21.25, 12.97, 8.28, 9.55, 9.99, 8.99, 2.25, 1.99, 3.99, 4.25, 6.99, 5.99, 2.49, 2.99, 2.39, 6.99, 6.99, 5.39, 5.99, 6.35, 5.99, 3.19, 2.79, 3.19, 2.79, 3.39, 3.99, 2.49, 3.99, 3.19, 2.49, 4.99, 4.59, 4.69, 3.69, 2.19, 1.58, 3.19, 3.69, 2.99, 6.82, 4.98, 8.99, 3.09, 1.89, 4.35, 3.45, 3.29, 3.99, 3.99, 3.99, 1.99, 4.17, 4.15, 3.99, 4.17, 3.99, 3.88, 2.99, 2.68, 17.49, 4.99, 3.99, 3.15, 3.99, 3.05, 5.49, 3.45, 1.79, 1.79, 1.46, 1.99, 2.15, 1.79, 9.95, 17.76, 24.98, 5.99, 16.99, 24.88, 6.05, 8.29, 5.99, 11.89, 8.35, 7.37, 5.79, 1.89, 1.88, 2.69, 1.99, 1.69, 2.99, 26.9, 1.95, 2.98, 2.49, 3.48, 1.95, 2.99, 6.98, 1.95, 5.17, 6.98, 17.9, 22.98, 20.98, 24.98, 17.98, 16.77, 16.98, 12.65, 7.69, 14.29, 11.78, 13.37];

vetCartProduto = [];
vetCartQuant = [];

for (let cont = 0; cont < vetProduto.length; cont++) {
    if (vetEspecifica[cont] == '-') {
        outProdutos.innerHTML += `<div class="boxProduto">
                <img src="/home/imagens/imgDefault.png">
                <h3>${vetProduto[cont]}</h3><br>
                <h3>${vetValor[cont]}</h3><br>
                <button onclick="addcart(${cont})">Adicionar ao carrinho</button>
            </div>`;
    } else {
        outProdutos.innerHTML += `<div class="boxProduto">
                <img src="/home/imagens/imgDefault.png">
                <h3>${vetProduto[cont]}</h3><br>
                <h3>Marca : ${vetEspecifica[cont]}</h3><br>
                <h3>${vetValor[cont]}</h3><br>
                <button onclick="addcart(${cont})">Adicionar ao carrinho</button>
            </div>`;
    }
}

function addcart (pt){
    let indAchado = -1; 
    
            for(let ind=0; ind<vetProduto.length; ind++){
                if(vetProduto[ind] == vetProduto[pt]){
                    indAchado = ind;
                }
            }

            if (indAchado == -1){
                vetCartProduto.push(pt);
                vetCartQuant.push(1);
            } else {
                for(let ind=0; ind<vetCartProduto.length; ind++){
                    if(vetCartProduto[ind] == vetCartProduto[pt]){
                        indAchado = ind;
                    }
                }
                vetCartQuant [indAchado] = vetCartQuant [indAchado] + 1;
            }
}

btCarrinhoJs.addEventListener("click", mostrarCarrinho);

function mostrarCarrinho() {
    const outCarrinho = document.querySelector('.sctCarrinhoCss');

    outCarrinho.style.display = 'block'; // Garanta que a seção esteja visível

    for (let cont = 0; cont < vetCartProduto.length; cont++) {

        outCarrinho.innerHTML += `
            <div class="boxProduto">
                <img src="/home/imagens/imgDefault.png">
                <h3>${vetProduto[vetCartProduto[cont]]}</h3><br>
                <h3>Quantidade: ${vetCartQuant[cont]}</h3><br>
                <h3>${vetValor[vetCartProduto[cont]]}</h3><br>
                <button onclick="adicionarMais(${cont})">Adicionar Mais</button>
                <button onclick="removerDoCarrinho(${cont})">Remover</button>
            </div>`;
    }
}

function adicionarMais(index) {
    vetCartQuant[index] += 1;
    mostrarCarrinho();
}

function removerDoCarrinho(index) {
    vetCartProduto.splice(index, 1);
    vetCartQuant.splice(index, 1);
    mostrarCarrinho();
}

btFecharCarrinho.addEventListener("click", fecharCarrinho);

function fecharCarrinho (){
    const outCarrinho = document.querySelector('.sctCarrinhoCss');

    outCarrinho.style.display = 'none';
}
