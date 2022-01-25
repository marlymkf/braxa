import React from "react";
import Button from "../Button/Button";
import { H1, Texto, Texto1, Texto3, Retangulo, Go } from "./styles";

const Hall = () => {
  return (
    <div className="ween flex justify-between">
      <div className="left ">
        <H1>Hall ween Products for your party</H1>
        <Texto>Search anything for your party and 
          get it fast and fast</Texto>                     
          <Button className="botao-0">Sign up</Button>
          <Button className="botao-1">View products</Button> 
          <Retangulo>
            <img
              className="icon"
              src="img/Icon (6).png"
              alt="Icon"             
              width="39"
              height="32"
            />
            <div className="flex justify-between">
              <Texto1>Rewards & Bonus</Texto1>
              <Go
              src="img/Go (2).png"
              alt="Go"             
              width="51"
              height="50"
            />
            </div>                          
              <Texto3>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla </Texto3>
          </Retangulo>                       
      </div>
      <div className="rigth">
          <img
            className="abobora"
            src="img/abobora.png"
            alt="abobora"
            width="687"
            height="688"
          />
      </div>
    </div>
    
  );
};

export default Hall;
