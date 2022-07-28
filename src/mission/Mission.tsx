import styled, { keyframes } from "styled-components";
import MemberCard from "./components/MemberCard";
import member from "./member";
import { IoFlowerSharp } from "react-icons/io5";

const Container = styled.div`
  background: linear-gradient(#8000ff6d, #e100ff6d);
  position: relative;
`;

const MemberList = styled.div`
  padding: 40px;
  max-width: 420px;
  margin: 0 auto;
  > div:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const FlowerAni = keyframes`
    0% {
        bottom: 100%
    }
    10% {
        bottom: 90%;
        left: 28%
    }
    20% {
        bottom: 80%;
        left: 30%
    }
    30% {
        bottom: 70%;
        left: 28%
    }
    40% {
        bottom: 60%;
        left: 30%
    }
    50% {
        bottom: 50%;
        left: 28%
    }
    60% {
        bottom: 40%;
        left: 30%
    }
    70% {
        bottom: 30%;
        left: 28%
    }
    80% {
        bottom: 20%;
        left: 30%
    }
    90% {
        bottom: 10%;
        left: 28%
    }
    100% {
        bottom: 0%;
        left: 30%
    }
`;

const Flower = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 100%;
  left: 30%;
  animation: ${FlowerAni} 40s linear infinite;
  svg {
    color: #fbff00;
    font-size: 20px;
  }
`;

const Mission = () => {
  return (
    <Container>
      <MemberList>
        {member.map((item, index) => {
          return <MemberCard key={index} {...item} />;
        })}
      </MemberList>
      <Flower>
        <IoFlowerSharp />
      </Flower>
    </Container>
  );
};

export default Mission;
