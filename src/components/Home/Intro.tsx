import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import router from "../../router";
import { colors } from "../../styles";

const SIntro = styled.div`
  padding: 120px 40px 80px;
  padding: 7.5rem 2.5rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  background-color: ${colors.backgroundColor};
`;

const GameImg = styled.img`
  display: block;
  width: 35vw;
  height: 35vw;
`;

const IntroMsg = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 5em;
  font-size: 5rem;
  font-weight: 700;
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  span:not(:last-child) {
    margin-bottom: 40px;
  }
  span:nth-child(1) {
    font-weight: 700;
    font-size: 1.5em;
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: ${colors.lightTextColor};
    transform: rotate(-3deg);
  }
  span:nth-child(3) {
    color: #ffc400;
    align-self: end;
    font-weight: 700;
    position: relative;
    margin-top: 10px;
  }
`;

const Title = styled.div`
  margin-right: 10px;
  color: ${colors.backgroundColor};
  background-color: ${colors.redColor};
  transform: rotate(-3deg);
  border-radius: 10px;
  padding: 15px;
`;

const StarImg = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  top: -40px;
  right: -40px;
  transform: rotate(90deg);
`;

const PlayBtn = styled.div`
  font-size: 0.875em;
  font-size: 0.875rem;
  background-color: #eebbff;
  align-self: end;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
  padding: 15px 30px;
  padding: 0.938rem 1.875rem;
  border-radius: 5px;
  border-radius: 0.313rem;
  transition: color 0.2s ease, background-color 0.2s ease;
  font-weight: 600;
  :hover {
    background-color: #cf3fff;
    color: ${colors.backgroundColor};
  }
`;

const Intro = () => {
  const navigate = useNavigate();
  const onClickPlayBtn = () => {
    navigate(router.play);
  };
  return (
    <SIntro>
      <IntroMsg>
        <span>초등교사 게임제작 커뮤니티</span>
        <div>
          <Title>리:플레이</Title>
          <span>게임즈와</span>
        </div>
        <span>
          함께
          <StarImg src="/img/threeline.png" />
        </span>
        <span>게임을 즐겨보세요!</span>
        <PlayBtn onClick={onClickPlayBtn}>Play Game 🕹</PlayBtn>
      </IntroMsg>
      <GameImg src="/img/game.png" />
    </SIntro>
  );
};

export default Intro;
