import styled from "styled-components";
import Intro from "../components/Home/Intro";
import { colors } from "../styles";

const Container = styled.div``;

const Layout = styled.div`
  /* background-color: ${colors.darkColor}; */
  background-image: url("https://img.freepik.com/free-vector/dark-low-poly-background_1048-7971.jpg?w=360");
  color: ${colors.backgroundColor};
  background-attachment: fixed;
  padding: 120px 60px;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 40px;
`;

const Title = styled.div`
  font-size: 3em;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-weight: 700;
  div:first-child {
    margin-bottom: 20px;
    text-align: start;
    width: 100%;
    padding: 10px;
    background-image: url("https://ouch-cdn2.icons8.com/SlrCIj15RW_c4lbF5oIPT7y6Aqnlt4GYfAtM5q3PUSs/rs:fit:256:263/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjQw/LzRmZWQyOTYwLWVh/NWQtNDRiNS1hOWFi/LTI0NmZmMjc1MTJl/OC5wbmc.png");
    background-repeat: no-repeat;
    color: ${colors.darkColor};
  }
`;

const Description = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const GameImage = styled.img`
  align-self: end;
  top: 120px;
  right: 0;
  /* width: 120px; */
  height: auto;
  position: absolute;
`;

const Text = styled.div`
  line-height: 160%;
  letter-spacing: 1px;
  /* font-size: 0.875em;
  font-size: 0.875rem; */
`;

const Home = () => {
  return (
    <Container>
      <Intro />
      <Layout>
        <Box>
          <Title>
            <div>초등 교사</div>
            <div>게임제작 커뮤니티</div>
          </Title>
          <Description>
            <GameImage src="/img/chess.png" />
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur ipsa nulla adipisci nemo, quia inventore suscipit
              officia laboriosam voluptatem accusantium voluptatum dicta,
              tenetur quisquam ipsum? Maxime soluta id enim reprehenderit?
            </Text>
          </Description>
        </Box>
      </Layout>
    </Container>
  );
};

export default Home;
