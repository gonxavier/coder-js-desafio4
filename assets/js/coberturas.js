//BUSQUEDA COBERTURAS EN JSON
const cardCoberturas = document.getElementById("coberturas");
fetch('coberturas.json')
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
})