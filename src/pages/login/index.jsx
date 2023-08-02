import { MdEmail, MdLock } from 'react-icons/md'
import { Colum, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }
  return (
    <>
      <Header />
      <Container>
        <Colum>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Colum>
        <Colum>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
              <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button"></Button>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Colum>
      </Container>
    </>
  );
};
export { Login };
