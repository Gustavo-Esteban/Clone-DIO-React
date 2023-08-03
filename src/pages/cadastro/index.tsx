import { MdEmail, MdLock,  } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { Colum, Container, Row, SubtitleLogin, Title, TitleLogin, Wrapper, FazerLogin, TenhoConta} from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IFormDataCadastro } from "./types";
import { useForm } from "react-hook-form";

const schema = yup
  .object({
    name: yup
    .string()
    .required("Campo obrigatório"),
    email: yup
      .string()
      .email("email não é valido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Cadastro = () => {

  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormDataCadastro>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

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
              <Input  
                name="name"
                errorMessage={errors?.name?.message}
                control={control}
                placeholder="Nome completo"
                leftIcon={<FaUserAlt />}></Input>
              <Input  name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}/>
              <Input  name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}/>
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
