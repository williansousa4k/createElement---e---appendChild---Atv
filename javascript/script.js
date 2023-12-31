let titulo = document.createElement("h1");

titulo.innerHTML = "Titulo"

titulo.id = "titulo"

document.body.appendChild(titulo);

console.log(titulo);

let produtoAvenda = document.createElement("div");

produtoAvenda.innerHTML = `

<h2>Banana</h2>
<p>
As bananas possuem um formato alongado, uma coloração amarela ou vermelha e um sabor doce.
</p>
<P>Preço: R$ 2,00</p>`

produtoAvenda.classList = "banana"

document.body.appendChild(produtoAvenda);

console.log(produtoAvenda);