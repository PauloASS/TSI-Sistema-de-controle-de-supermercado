//Entradas de dados
const inProduto = document.getElementById("inProduto");
const inPreco1 = document.getElementById("inPreco1");
const inPreco2 = document.getElementById("inPreco2");
//Campos de selencionar
const slCategorias = document.getElementById("slCategorias");
const slMarca = document.getElementById("slMarca");
//Botões
const btFiltrar = document.getElementById("btFiltrar");
const btCarrinhoJs = document.getElementById("btCarrinhoJs");
const btFecharCarrinho = document.getElementById("btFecharCarrinho");
//Saídas de dados
const outProdutos = document.getElementById("outProdutos");
const outCarrinho = document.getElementById("outCarrinho");
//Section de carrinho
const sctCarrinhoCss = document.querySelector(".sctCarrinhoCss");

//Vetores
var vetProduto = ['Achocolatado', 'Achocolatado', 'Achocolatado', 'Açúcar Cristal', 'Açúcar Cristal', 'Açúcar Refinado', 'Açúcar Refinado', 'Arroz Agulhinha Tipo 1', 'Arroz Agulhinha Tipo 1', 'Arroz Agulhinha Tipo 1', 'Café Torrado moído', 'Café Torrado moído', 'Café Torrado moído', 'Café Torrado moído', 'Ervilha em Conserva', 'Ervilha em Conserva', 'Extrato de Tomate', 'Extrato de Tomate (Molho de tomate)', 'Farinha de Mandioca', 'Farinha de Mandioca', 'Farinha de Trigo', 'Farinha de Trigo', 'Farinha de Trigo', 'Feijão Carioca', 'Feijão Carioca', 'Feijão Carioca', 'Feijão Preto', 'Feijão Preto', 'Feijão Preto', 'Leite Longa Vida Integral', 'Leite Longa Vida Integral', 'Leite Longa Vida Desnatado', 'Leite Longa Vida Desnatado', 'Macarrão Espaguete', 'Macarrão Espaguete', 'Macarrão Espaguete', 'Macarrão Parafuso', 'Macarrão Parafuso', 'Macarrão Parafuso', 'Margarina', 'Margarina', 'Margarina', 'Margarina', 'Milho Verde', 'Milho Verde', 'Óleo de Soja', 'Óleo de Soja', 'Óleo de Soja', 'Pão de Forma', 'Pão de Forma', 'Pão Francês', 'Sal Refinado', 'Sal Refinado', 'Sardinha em lata', 'Sardinha em lata', 'Sardinha em lata', 'Tempero Completo', 'Tempero Completo', 'Vinagre', 'Vinagre', 'Absorvente com aba', 'Absorvente com aba', 'Absorvente com aba', 'Absorvente sem aba', 'Absorvente sem aba', 'Absorvente sem aba', 'Água Sanitária', 'Água Sanitária', 'Amaciante', 'Amaciante', 'Creme Dental', 'Creme Dental', 'Creme Dental', 'Creme Dental', 'Desinfetante', 'Desinfetante', 'Detergente Líquido', 'Detergente Líquido', 'Detergente Líquido', 'Lã de Aço', 'Lã de Aço', 'Lã de Aço', 'Papel Higiênico Folha Dupla Rolo c/04 unidades', 'Papel Higiênico Folha Dupla Rolo c/ 12 unidades', 'Papel Higiênico Folha Dupla Rolo c/24 unidades', 'Papel Higiênico Folha Simples Rolo c/04 unidades', 'Papel Higiênico Folha Simples Rolo c/12 unidades', 'Papel Higiênico Folha Simples Rolo c/24 unidades', 'Sabão em barra', 'Sabão em barra', 'Sabão em barra', 'Sabão em Pó', 'Sabão em Pó', 'Sabão em Pó', 'Sabão em Pó', 'Sabonete', 'Sabonete', 'Sabonete', 'Sabonete', 'Sabonete', 'Alface', 'Alho', 'Banana', 'Batata', 'Cebola', 'Cenoura', 'Cebolinha Verde', 'Limão', 'Pepino', 'Salsinha', 'Tomate', 'Ovos Brancos', 'Acém', 'Bisteca Sem filé', 'Miolo de Paleta bife', 'Carne moída de 1º', 'Carne moída de 2º', 'Costela Ripa', 'Costelinha (sem pele)', 'Bisteca da copa', 'Frango inteiro resfriado', 'Linguiça Toscana', 'Paleta (com osso e com pele)', 'Pernil (com osso e com pele)'];

var vetCategoria = ['Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Mercearia', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Produtos de Higiene e Limpeza', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Hortifrutigranjeiros', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)', 'Carnes ( Aves, Bovino e Suíno)'];

var vetEspecifica = ['Nescau', 'Toddy', 'Menor Preço', 'Alto Alegre', 'Menor Preço', 'Alto Alegre', 'Menor Preço', 'Zaeli', 'Tio João', 'Menor Preço', 'Cocamar', 'Jandaia', 'Itamaraty', 'Menor Preço', 'Quero', 'Menor Preço', 'Elefante', 'Pomarola', 'Pinduca', 'Menor Preço', 'Sol', 'Anaconda', 'Menor Preço', 'Martinelli', 'De Ouro', 'Menor Preço', 'Martinelli', 'De Ouro', 'Menor Preço', 'Líder', 'Menor Preço', 'Líder', 'Menor Preço', 'Galo', 'Renata', 'Menor Preço', 'Renata', 'Galo', 'Menor Preço', 'Qualy', 'Doriana', 'Delícia', 'Menor Preço', 'Quero', 'Menor Preço', 'Cocamar', 'Liza', 'Menor Preço', 'Pullman', 'Menor Preço', '-', 'Cisne', 'Menor Preço', 'Coqueiro', 'Gomes da Costa', 'Menor Preço', 'Ami', 'Menor Preço', 'Castelo', 'Menor Preço', 'Intimus', 'Sempre Livre', 'Menor Preço', 'Intimus', 'Sempre Livre', 'Menor Preço', 'Qboa', 'Menor Preço', 'Confort', 'Menor Preço', 'Close-up', 'Sorriso', 'Colgate', 'Menor Preço', 'Pinho-Sol', 'Menor Preço', 'Ypê', 'Limpol', 'Menor Preço', 'Bom Bril', 'Assolan', 'Menor Preço', 'Menor Preço', 'Menor Preço', 'Menor Preço', 'Menor Preço', 'Menor Preço', 'Menor Preço', 'Alpes', 'Ypê', 'Menor Preço', 'Omo', 'Brilhante', 'Ypê', 'Menor Preço', 'Francis', 'Lux', 'Dove', 'Palmolive', 'Menor Preço', 'Crespa', 'Importado', 'Caturra/nanica', 'Monalisa', 'Nacional', '-', '-', 'Taiti', 'Japonês', '-', 'Menor Preço', '-', 'Bovino', 'Bovino', 'Bovino', 'Bovino', 'Bovino', 'Bovino', 'Suína', 'Suína', 'Frango', 'Frimesa', 'Suino', 'Suíno'];

var vetUm = ['400g', '400g', '400g', '5 Kg', '5 Kg', '1 Kg', '1 Kg', '5 Kg', '5 Kg', '5 Kg', '500g', '500g', '500g', '500g', '200g', '200g', '340g', '340g', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1Kg', '1 L', '1 L', '1 L', '1 L', '500g', '500g', '500g', '500g', '500g', '500g', '500g', '500g', '500g', '500g', '200g', '200g', '900ml', '900ml', '900ml', '500g', '500g', 'Kg', '1Kg', '1 Kg', '125g', '125g', '125g', '300g', '300g', '750ml', '750ml', '8 un.', '8 un.', '8 un.', '8 un.', '8 un.', '8 un.', '1 L', '1 L', '2 L', '2 L', '90g', '90g', '90g', '90g', '500ml', '500ml', '500ml', '500ml', '500ml', 'Pcte', 'Pcte', 'Pcte', '30m', '30m', '30m', '60m', '60m', '60m', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '1 Kg', '90g', '85g', '90g', '90g', '84g-90g', 'Un.', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', '1 Dúzia', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg', 'Kg'];

var vetValor = [7.28, 7.39, 5.79, 11.99, 14.57, 3.39, 3.39, 15.99, 21.25, 12.97, 8.28, 9.55, 9.99, 8.99, 2.25, 1.99, 3.99, 4.25, 6.99, 5.99, 2.49, 2.99, 2.39, 6.99, 6.99, 5.39, 5.99, 6.35, 5.99, 3.19, 2.79, 3.19, 2.79, 3.39, 3.99, 2.49, 3.99, 3.19, 2.49, 4.99, 4.59, 4.69, 3.69, 2.19, 1.58, 3.19, 3.69, 2.99, 6.82, 4.98, 8.99, 3.09, 1.89, 4.35, 3.45, 3.29, 3.99, 3.99, 3.99, 1.99, 4.17, 4.15, 3.99, 4.17, 3.99, 3.88, 2.99, 2.68, 17.49, 4.99, 3.99, 3.15, 3.99, 3.05, 5.49, 3.45, 1.79, 1.79, 1.46, 1.99, 2.15, 1.79, 9.95, 17.76, 24.98, 5.99, 16.99, 24.88, 6.05, 8.29, 5.99, 11.89, 8.35, 7.37, 5.79, 1.89, 1.88, 2.69, 1.99, 1.69, 2.99, 26.9, 1.95, 2.98, 2.49, 3.48, 1.95, 2.99, 6.98, 1.95, 5.17, 6.98, 17.9, 22.98, 20.98, 24.98, 17.98, 16.77, 16.98, 12.65, 7.69, 14.29, 11.78, 13.37];

//vetor do carrinho
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
                    <h3>${vetValor[cont]}</h3>
                    <button onclick="addcart(${cont})">Adicionar ao carrinho</button>
            </div>`;
    }
}

//Filtro funcionando

btFiltrar.addEventListener("click", filtrar);

function filtrar() {

    var valorMin = inPreco1.value;
    var valorMax = inPreco2.value;

    if ( valorMin < 0 ) {
        alert("O campo de valor minímo está incorreto, por favor preencha corretamente");
        inPreco1.focus();
        inPreco1.value = '';
    } else if ( valorMax < 0 ) {
        alert("O campo de valor maxímo está incorreto, por favor preencha corretamente");
        inPreco2.focus();
        inPreco2.value = '';
    } else if ( valorMin > valorMax ){
        alert("O campo de valor maxímo não pode ser menor que o valor mínimo");
        inPreco2.focus();
        inPreco2.value = '';
    } else {
        outProdutos.innerHTML = "Nenhum produto foi encontrado";

        var vetFiltro = [];

        var nome = inProduto.value;
        var cat = slCategorias.value;
        var marca = slMarca.value;

        for (let i = 0; i < vetProduto.length; i++) {
            if (
                (slCategorias.value == '' || cat == vetCategoria[i]) &&
                (inPreco1.value == '' || valorMin <= vetValor[i]) &&
                (inPreco2.value == '' || valorMax >= vetValor[i]) &&
                (inProduto.value == '' || nome == vetProduto[i]) &&
                (slMarca.value == '' || marca == vetEspecifica[i])
            ) {
                vetFiltro.push(i);
            }
        }

        if (vetFiltro.length > 0) {
            outProdutos.innerHTML = "";

            for (let i = 0; i < vetFiltro.length; i++) {
                var index = vetFiltro[i];
                if (vetEspecifica[index] === '-') {
                    outProdutos.innerHTML += `
                <div class="boxProduto">
                    <img src="/home/imagens/imgDefault.png">
                    <h3>${vetProduto[index]}</h3><br>
                    <h3>${vetValor[index]}</h3><br>
                    <button onclick="addcart(${index})">Adicionar ao carrinho</button>
                </div>`;
                } else {
                    outProdutos.innerHTML += `
                <div class="boxProduto">
                    <img src="/home/imagens/imgDefault.png">
                    <h3>${vetProduto[index]}</h3><br>
                    <h3>Marca : ${vetEspecifica[index]}</h3><br>
                    <h3>${vetValor[index]}</h3>
                    <button onclick="addcart(${index})">Adicionar ao carrinho</button>
                </div>`;
                }
            }
        }

        inProduto.value = '';
        inPreco1.value = '';
        inPreco2.value = '';
        slCategorias.value = '';
        slMarca.value = '';
    }
}

function addcart(pt) {
    let indAchado = -1;
    for(let ind=0; ind<vetCartProduto.length; ind++){
        if(vetCartProduto[ind] == pt){
            indAchado = ind;
        }
    }
    if (indAchado == -1){
        vetCartProduto.push(pt);
        vetCartQuant.push(1);
    } else {
        vetCartQuant[indAchado] += 1;
    }
}

function removeCart(pt){
    console.log(`Produto ${vetProduto[pt]} removido do carrinho!`);
}

function quantidadeCart(pt){
    console.log(`Produto ${vetProduto[pt]} foi autalizado na quantia ao carrinho!`);
}

btCarrinhoJs.addEventListener("click", mostrarCarrinho);
function mostrarCarrinho() {
    sctCarrinhoCss.style.marginLeft = '5%';
    sctCarrinhoCss.style.marginTop = '2%';

    if (vetCartProduto.length > 0) {
        let index1 = vetCartProduto[i]; // index para o nome do produto
        let index2 = vetCartQuant[i]; //Index para quantia
        if (vetEspecifica[index1] === '-') {
            outCarrinho.innerHTML += `
        <div class="boxProduto">
            <img src="/home/imagens/imgDefault.png">
            <h3>${vetProduto[index1]}</h3><br>
            <h3>${vetValor[index1]}</h3><br>
            <button onclick="quantidadeCart(${index1})">Adicionar ao Carrinho</button>
            <button onclick="removeCart(${index1})">Remover do Carrinho</button>
        </div>`;
        } else {
            outCarrinho.innerHTML += `
        <div class="boxProduto">
            <img src="/home/imagens/imgDefault.png">
            <h3>${vetProduto[index1]}</h3><br>
            <h3>${vetValor[index1]}</h3><br>
            <h3>Marca : ${vetEspecifica[index1]}</h3><br>
            <button onclick="addCart(${index1})">Adicionar ao Carrinho</button>
            <button onclick="removeCart(${index1})">Remover do Carrinho</button>
        </div>`;
        }
    }
}

btFecharCarrinho.addEventListener("click", fecharCarrinho)
function fecharCarrinho() {
    sctCarrinhoCss.style.marginLeft = '100%';
}

const inPesquisa = document.getElementById("inPesquisa");

inProduto.addEventListener("keypress", function(event) {
	if (event.key == 'Enter') {
    	buscarProduto();
	}
});

function buscarProduto() {
	const pesquisa = inProduto.value.toLowerCase();
	const vetFiltro = [];

	for (let i = 0; i < vetProduto.length; i++) {
    	// Verifica se a pesquisa está contida em qualquer uma das descrições
    	if (
        	vetProduto[i].toLowerCase().includes(pesquisa) ||
        	vetEspecifica[i].toLowerCase().includes(pesquisa)
    	) {
        	vetFiltro.push(i);
    	}
	}

	exibirProdutos(vetFiltro);
}

// Função para exibir produtos filtrados
function exibirProdutos(vetFiltro) {
	outProdutos.innerHTML = ""; // Limpa a lista atual

	if (vetFiltro.length == 0) {
    	outProdutos.innerHTML = "Nenhum produto encontrado";
    	return;
	}

	for (let i = 0; i < vetFiltro.length; i++) {
    	const index = vetFiltro[i];
    	if (vetEspecifica[index] === '-') {
        	outProdutos.innerHTML += `
        	<div class="boxProduto">
            	<img src="/home/imagens/imgDefault.png">
            	<h3>${vetProduto[index]}</h3><br>
            	<h3>R$:${vetValor[index]}</h3><br>
            	<button onclick="addcart(${index})">Adicionar ao carrinho</button>
        	</div>`;
    	} else {
        	outProdutos.innerHTML += `
        	<div class="boxProduto">
            	<img src="/home/imagens/imgDefault.png">
            	<h3>${vetProduto[index]}</h3><br>
            	<h3>Marca: ${vetEspecifica[index]}</h3><br>
            	<h3>R$:${vetValor[index]}</h3>
            	<button onclick="addcart(${index})">Adicionar ao carrinho</button>
        	</div>`;
    	}
	}
}

