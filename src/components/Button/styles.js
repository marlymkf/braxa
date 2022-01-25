import styled from "styled-components";

export const Botao = styled.button`
  border: 2px solid #ea6623;
  box-sizing: border-box;
  border-radius: 4px;
  color: #ffffff;
  padding: 13px 40px;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  background: #000;
  margin-left: 29px;

  @media (max-width: 767px) {
    font-size: 12px;
    padding: 10px 20px;
  }

  &.botao-0,
  &.botao-1 {
    padding: 16px 40px;
    background: #ea6623;
    border-radius: 4px;
    color: #ffffff;
    font-size: 18px;
    line-height: 21px;
    margin: 0 10px;
    border: 0;
    cursor: pointer;

    @media (max-width: 965px) {
      margin-bottom: 20px;
      width: 100%;
      padding: 30px 44px;
      font-size: 25px;
      margin-left: 0;
    }

    @media (max-width: 767px) {
      margin-bottom: 20px;
      width: 100%;
      font-size: 24px;
      padding: 20px 0;
      margin-left: 0;
    }
  }

  &.botao-1 {
    background: #000;
    border: 1px solid rgba(234, 102, 35, 0.6);
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const BotaoLaranja = styled.button`
  padding: 16px 40px;
  background: #ea6623;
  border-radius: 4px;
  color: #ffffff;
  font-size: 18px;
  line-height: 21px;
  margin: 0 10px;
  border: 0;
  cursor: pointer;

  @media (max-width: 965px) {
    margin-bottom: 20px;
    width: 100%;
    padding: 30px 44px;
    font-size: 25px;
    margin-left: 0;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
    width: 100%;
    font-size: 24px;
    padding: 20px 0;
    margin-left: 0;
  }
`;

export const BotaoTranparente = styled(BotaoLaranja)`
  background: #000;
  border: 1px solid rgba(234, 102, 35, 0.6);
  color: rgba(255, 255, 255, 0.6);
`;
