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
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { user, handleSignOut } = useAuth();
  return (
    <Wrapper>
      <Conatiner>
        <Row>
          <Link to="/">
            <img src={logo} alt="logo da dio"></img>
          </Link>
          {user.id ? (
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
          {user.id ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/62370227?v=4" />
              <a href="#" onClick={handleSignOut}>
                Sair
              </a>
            </>
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
