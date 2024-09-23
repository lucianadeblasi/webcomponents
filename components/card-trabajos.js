function agregarCard() {
    const cardEl = document.createElement("div");
    const templateEl = document.querySelector("#template");
  
    cardEl.innerHTML = `
        <a class="link" href="" target="_blank" >  
          <div class="card">
            <div class="contenedor-datos-de-card">
              <img src="" class="image"/>
              <h2 class="titulo-trabajo"></h2>
              <p class="descripcion-trabajo"></p>
            </div>
          </div>
        </a>  
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
    const contenedorTemplateEl = document.querySelector(".contenedor-trabajos");
  
    arr.forEach((e) => {
      if (
        e.fields.title == "Interfaces responsivas" ||
        e.fields.title == "Optimización" ||
        e.fields.title == "Integración de APIs"
      ) {
        return;
      } else {
        const clone = document.importNode(templateEl.content, true);
  
        const image = clone.querySelector(".image");
        image.src = e.fields.src;
  
        const title = clone.querySelector(".titulo-trabajo");
        title.textContent = e.fields.title;
  
        const description = clone.querySelector(".descripcion-trabajo");
        description.textContent = e.fields.description;
  
        const link = clone.querySelector(".link");
        link.href = e.fields.url;
  
        contenedorTemplateEl.appendChild(clone);
      }
    });
  }
  
  function main() {
    agregarCard();
    traerCards();
  }
  main();