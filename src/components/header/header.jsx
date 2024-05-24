import { useEffect } from "react";
import Logo from "../../assets/logo.jpg";

const Header = () => {
  useEffect(() => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    if (abrir) {
      abrir.addEventListener("click", () => {
        nav.classList.add("visible");
      });
    }

    if (cerrar) {
      cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
      });
    }
  });

  return (
    <header>
      <img src={Logo} alt="logo" />
      <button id="abrir" className="abrir-menu">
        <i className="bi bi-list"></i>
      </button>
      <nav id="nav" className="nav">
        <button id="cerrar" className="cerrar-menu">
          <i className="bi bi-x-lg"></i>
        </button>
        <ul>
          <li>Inicio</li>
          <li>Pedí!</li>
          <li>Menu</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
