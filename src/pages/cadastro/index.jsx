import { MdEmail, MdLock,  } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { Colum, Container, Row, SubtitleLogin, Title, TitleLogin, Wrapper, FazerLogin, TenhoConta} from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {

  const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="Nome completo" leftIcon={<FaUserAlt />}></Input>
              <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
              <Button title="Criar minha conta" variant="secondary" onClick={handleClickSignIn} type="button"></Button>
            </form>
            <Row>
              <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
            </Row>
            <Row>
              <TenhoConta>Já tenho conta.</TenhoConta>
              <FazerLogin>Fazer login</FazerLogin>
            </Row>
          </Wrapper>
        </Colum>
      </Container>
    </>
  );
};
export { Cadastro };
