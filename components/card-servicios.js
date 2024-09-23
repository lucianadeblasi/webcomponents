function agregarCard() {
    const cardEl = document.createElement("div");
    const templateEl = document.querySelector("#template");
  
    cardEl.innerHTML = `
        <div class="card">
          <div class="contenedor-datos-de-card">
            <img src="" class="image"/>
            <h2 class="titulo-servicio"></h2>
            <p class="descripcion-servicio"></p>
          </div>
        </div>
      `;
  
    templateEl.content.appendChild(cardEl);
  }
  
  function traerCards() {
    fetch(
      "https://cdn.contentful.com/spaces/a5cvmzc72uep/environments/master/entries?access_token=RUASh7JConJubHYiT-6AQTh11vb2LarVr6uNTsryAlA"
    )
      .then((res) => res.json())
      .then((data) => llenarCards(data.items));
  }
  
  function llenarCards(arr) {
    const templateEl = document.querySelector("#template");
    const contenedorTemplateEl = document.querySelector(".contenedor-servicios");
  
    arr.forEach((e) => {
      if (
        e.fields.title == "Maquetado" ||
        e.fields.title == "POO" ||
        e.fields.title == "Programación funcional"
      ) {
        return;
      } else {
        const clone = document.importNode(templateEl.content, true);
  
        const image = clone.querySelector(".image");
        image.src = e.fields.url;
  
        const title = clone.querySelector(".titulo-servicio");
        title.textContent = e.fields.title;
  
        const description = clone.querySelector(".descripcion-servicio");
        description.textContent = e.fields.description;
  
        contenedorTemplateEl.appendChild(clone);
      }
    });
  }
  
  function main() {
    agregarCard();
    traerCards();
  }
  main();