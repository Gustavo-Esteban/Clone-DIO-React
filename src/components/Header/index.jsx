import React from "react";
import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";

import {
  BuscarInputConatiner,
  Conatiner,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  UserPicture,
} from "./styles";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Conatiner>
        <Row>
          <img src={logo} alt="logo da dio"></img>
          {autenticado ? (
            <>
              <BuscarInputConatiner>
                <Input placeholder=""></Input>
              </BuscarInputConatiner>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/62370227?v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar"></Button>
              <Button title="Entrar"></Button>
            </>
          )}
        </Row>
      </Conatiner>
    </Wrapper>
  );
};

export { Header };
