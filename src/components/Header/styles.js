import styled from "styled-components";

export const Cabecalho = styled.header`
  margin-top: 38px;
  margin-bottom: 77px;

  @media (max-width: 965px) {
    margin-bottom: 10px;

    &.active #hamburger {
      border-top-color: transparent;
    }
    &.active #hamburger::before {
      transform: rotate(135deg);
    }
    &.active #hamburger::after {
      transform: rotate(-135deg);
      top: -7px;
    }
    &.active .nav {
      height: calc(100% - 97px);
      visibility: visible;
      overflow-y: auto;
      padding: 0 2.5%;
    }
  }
`;

export const Lista = styled.ul`
  * {
    display: block;
  }
`;

export const ListaLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  margin-right: 48px;

  @media (max-width: 965px) {
    padding-bottom: 20px;
    padding-top: 20px;
  }
`;
export const Hamburger = styled.span`
  @media (max-width: 965px) {
    border-top: 2px solid;
    width: 20px;
  }

  &::after,
  &::before {
    content: "";
    width: 20px;
    display: block;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
`;
export const BtnMobile = styled.menu`
  display: none;

  @media (max-width: 965px) {
    display: flex;
    padding: 0.5rem 8px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    gap: 0.5rem;
    color: #000;
    background: none;
    text-indent: -10000px;
  }
`;
