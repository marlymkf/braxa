import styled from "styled-components";

export const Texto = styled.p`
  max-width: 372px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 54px;

  @media (max-width: 965px) {
    max-width: 100%;
    font-size: 28px;
  }
`;
export const Texto1 = styled.p`
  margin-bottom: 4px;
  max-width: 237px;
  color: #000000;
  font-weight: 900;
  font-size: 24px;
  line-height: 36px;
  margin-top: 10px;

  @media (max-width: 965px) {
    font-size: 25px;
  }
`;
export const Texto3 = styled.p`
  max-width: 300px;
  margin: auto;
  color: #000000;
  font-size: 16px;
  line-height: 25px;

  @media (max-width: 965px) {
    max-width: 100%;
    font-size: 22px;
    line-height: 32px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const H1 = styled.h1`
  max-width: 477px;
  font-size: 48px;
  line-height: 57px;
  color: #ffffff;
  margin-bottom: 42px;
  margin-top: 156px;

  @media (max-width: 965px) {
    max-width: 100%;
    font-size: 58px;
    line-height: 57px;
  }

  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 44px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
export const Retangulo = styled.div`
  max-width: 383px;
  height: 224px;
  padding: 14px 49px 69px 33px;
  background: linear-gradient(
    126.21deg,
    #ea6623 0%,
    rgba(234, 102, 35, 0.6) 14.24%,
    #ee9a37 49.56%,
    rgba(234, 102, 35, 0.6) 93.2%
  );
  border-radius: 20px;
  margin: 95px 0;

  @media (max-width: 965px) {
    max-width: 100%;
  }

  @media (max-width: 767px) {
    margin-top: 40px;
    padding: 25px 25px 39px 30px;
  }
`;
export const Go = styled.img`
  @media (max-width: 767px) {
    display: none;
  }
`;
