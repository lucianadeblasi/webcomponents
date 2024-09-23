function agregarHeader() {
    const headerEl = document.createElement("div");
    headerEl.innerHTML = `
    <header class="header">
        <a href="../index.html"><img src="../images/luciana logo.png" class="logo" /></a>
        <button class="burger">
          <div class="burger-item"></div>
          <div class="burger-item"></div>
          <div class="burger-item"></div>
        </button>
        <div class="link-container">
          <a href="../portfolio.html">Portfolio</a>
          <a href="../servicios.html">Servicios</a>
          <a href="../contacto.html">Contacto</a>
        </div>
      </header>
      <div class="burger-abierta">
        <button class="cerrar-burger">
          <img src="../images/cruz.png" class="cruz" />
        </button>
        <div class="burger-abierta-item-contenedor">
          <a href="../portfolio.html" class="burger-item">Portfolio</a>
          <a href="../servicios.html" class="burger-item">Servicios</a>
          <a href="../contacto.html" class="burger-item">Contacto</a>
        </div>
      </div>
    `;
    document.body.appendChild(headerEl);
  
    headerEl.querySelector(".logo");
  }

  function manejarBurger() {
    const burger = document.querySelector(".burger");
    const burgerAbierta = document.querySelector(".burger-abierta");
    const cerrarBurger = document.querySelector(".cerrar-burger");
  
    burger.addEventListener("click", () => {
      burgerAbierta.style.display = "inherit";
    });
  
    cerrarBurger.addEventListener("click", () => {
      burgerAbierta.style.display = "";
    });
  }
  
  function main() {
    agregarHeader();
    manejarBurger();
  }
  main();