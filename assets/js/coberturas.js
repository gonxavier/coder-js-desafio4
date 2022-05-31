//BUSQUEDA COBERTURAS EN JSON
/* const cardCoberturas = document.getElementById("coberturas");
fetch('https://gonxavier.github.io/coder-js-desafio4/assets/js/coberturas.json')
.then((datos) => datos.json())
.then((card) => {
    card.forEach(valor => {
        let div_padre = document.createElement("div");
        div_padre.classsName = "card";
        let div_hijo1 = document.createElement("div");
        div_hijo1.classsName = "card-header";
        let div_hijo2 = document.createElement("div");
        div_hijo2.classsName = "card-header";
        
        let parrafo = document.createElement("p");
                
        div_hijo1.innerText = valor.nombre;
        parrafo.innerText = valor.descripcion;

        div_hijo2.appendChild(parrafo);
        div_padre.appendChild(div_hijo1);
        div_padre.appendChild(div_hijo2);
        cardCoberturas.appendChild(div_padre);
    })
}) */

const cardCoberturas = document.getElementById("coberturas");
fetch('https://gonxavier.github.io/coder-js-desafio4/assets/js/coberturas.json')
.then((datos) => datos.json())
.then((card) => {
    card.forEach(valor => {
        let tarjeta = document.createElement("div");
        tarjeta.classsName = "card";
        
        tarjeta.innerHTML = `<h2 class="card-cobertura">Cobertura (${valor.letra}) ${valor.nombre}</h2>
        <p class="card-cobertura"><b>Descripción de la cobertura:</b> ${valor.descripcion}</p>
        <p class="card-cobertura"><b>Responsabilidad Civil:</b> ${valor.rc}</p>
        <p class="card-cobertura"><b>Robo:</b> ${valor.robo}</p>
        <p class="card-cobertura"><b>Incendio:</b> ${valor.incendio}</p>
        <p class="card-cobertura"><b>Daños por accidente:</b> ${valor.accidente}</p>
        <hr class="card-cobertura">
        `
        cardCoberturas.appendChild(tarjeta);
    })
})