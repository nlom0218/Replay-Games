import styled from "styled-components";
import Intro from "../components/Home/Intro";
import { colors } from "../styles";
import AboutGroup from "./AboutGroup";

const Container = styled.div``;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  gap: 2.5rem;
  margin: 60px;
  margin: 3.75rem;
  align-items: stretch;
`;

const LayoutTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

const Image = styled.div`
  background: url("https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80");
  background-size: cover;
  background-position: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 160%;
  div:first-child {
    margin-bottom: 20px;
    font-size: 2em;
    font-size: 2rem;
    font-weight: 700;
  }
  div:last-child {
    color: ${colors.lightTextColor};
  }
`;

const GameImage = styled.img`
  padding: 0px 20px;
  padding: 0rem 1.25rem;
  position: relative;
  top: -180px;
`;

const LayoutThree = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 40px;
`;

const Image2 = styled.div`
  position: relative;
  height: 240%;
  top: -160px;
  background-image: url("https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80");
  background-size: cover;
  background-position: center;
`;

const Home = () => {
  return (
    <Container>
      <Intro />
      <AboutGroup />
      <Layout>
        <LayoutTwo>
          <Image></Image>
          <Contents>
            <div>CREATIVE</div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque aliquam soluta saepe deserunt mollitia natus blanditiis
              unde explicabo, porro culpa numquam! Quia itaque porro quisquam
              culpa non tenetur numquam accusantium.
            </div>
          </Contents>
        </LayoutTwo>
        <GameImage src="/img/chess.png" />
        <LayoutThree>
          <Contents>
            <div>ACHIEVEMENT</div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque aliquam soluta saepe deserunt mollitia natus blanditiis
              unde explicabo, porro culpa numquam! Quia itaque porro quisquam
              culpa non tenetur numquam accusantium.
            </div>
          </Contents>
          <Image2></Image2>
        </LayoutThree>
      </Layout>
    </Container>
  );
};

export default Home;
