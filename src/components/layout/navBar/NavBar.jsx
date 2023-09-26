import CartWidget from "../../common/cartWidget/CartWidget";

import "./navBar.css";
export const NavBar = () => {
  return (
    <div className="logo">
      <h4>Logo de mascotas</h4>
      <ul className="navbar">
        <li>Inicio</li>
        <li>Perros</li>
        <li>Gatos</li>
      </ul>
      <CartWidget size={35} />
    </div>
  );
};
