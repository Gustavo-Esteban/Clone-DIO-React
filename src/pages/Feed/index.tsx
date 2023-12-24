import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          <UserInfo
            percentual={80}
            nome="Gustavo Esteban"
            image="https://avatars.githubusercontent.com/u/62370227?v=4"
          />

          <UserInfo
            percentual={35}
            nome="Gustavo Esteban"
            image="https://avatars.githubusercontent.com/u/62370227?v=4"
          />

          <UserInfo
            percentual={60}
            nome="Gustavo Esteban"
            image="https://avatars.githubusercontent.com/u/62370227?v=4"
          />

          <UserInfo
            percentual={15}
            nome="Gustavo Esteban"
            image="https://avatars.githubusercontent.com/u/62370227?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
