import React, { useState } from "react";
import Button from "../Button/Button";
import { Lista, ListaLink, Cabecalho, Hamburger, BtnMobile } from "./styles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
   
    <Cabecalho
      className={`flex justify-between align-center ${
        isMenuOpen ? "active" : ""
      }`}
    >
      <img
        className="fantasma"
        src="img/Group 355.png"
        alt="fantasma"
        width="146"
        height="49"
      />

      <div className="nav flex justify-between ">
        <Lista className="lista flex align-center">
          <li>
            <ListaLink href="Home">Home</ListaLink>
          </li>
          <li>
            <ListaLink href="Services">Services</ListaLink>
          </li>
          <li>
            <ListaLink href="Success Stories">Success Stories</ListaLink>
          </li>
          <li>
            <ListaLink href="Blog">Blog</ListaLink>
          </li>
        </Lista>
      </div>
      <div className="flex align-center">
        <Button className="botao">Sign up</Button>
        <BtnMobile id="btn-mobile" onClick={handleMenu}>
          Menu
          <Hamburger id="hamburger"></Hamburger>
        </BtnMobile>
      </div>
    </Cabecalho>
  );
};

export default Header;
