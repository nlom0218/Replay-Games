import styled from "styled-components";

const Container = styled.div``;

const GameImg = styled.img`
  display: block;
  width: 40vw;
  height: 40vw;
`;

const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  position: relative;
`;

const IntroMsg = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 6em;
  font-family: "Noto Sans KR", sans-serif;
  span:not(:last-child) {
    margin-bottom: 50px;
  }
  span:first-child {
    font-weight: 700;
    font-size: 1.5em;
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${(props) => props.theme.lightTextColor};
  }
  span:nth-child(3) {
    color: #ffcf2e;
    text-align: end;
    font-weight: 700;
    position: relative;
  }
`;

const StarImg = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  top: -40px;
  transform: rotate(90deg);
`;

const Scroll = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 20px 10px;
  cursor: pointer;
  background-color: orange;
  border-radius: 30px / 40px;
`;

const Icon = styled.div`
  margin-top: 10px;
  font-size: 1.5em;
  transform: rotate(60deg) scaleY(2);
`;

const Home = () => {
  return (
    <Container>
      <Intro>
        <IntroMsg>
          <span>초등교사 게임제작 커뮤니티</span>
          <span>리:플레이 게임즈와</span>
          <span>
            함께
            <StarImg src="/img/threeline.png" />
          </span>
          <span>게임을 즐겨보세요!</span>
        </IntroMsg>
        <GameImg src="/img/game.png" />
      </Intro>
    </Container>
  );
};

export default Home;
