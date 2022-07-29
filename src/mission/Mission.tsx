import styled from "styled-components";
import MemberCard from "./components/MemberCard";
import member from "./member";
import Flower from "./components/Flower";

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

const Mission = () => {
  return (
    <Container>
      <MemberList>
        {member.map((item, index) => {
          return <MemberCard key={index} {...item} />;
        })}
      </MemberList>
      <Flower color="#ff7c3b" duration={40} delay={1} left={30} />
      <Flower color="#ff2424" duration={30} delay={2} left={60} />
      <Flower color="#ff5500" duration={60} delay={3} left={90} />
      <Flower color="#f9fd39" duration={60} delay={1} left={10} />
      <Flower color="#84fd39" duration={40} delay={2} left={40} />
      <Flower color="#f9fd39" duration={30} delay={3} left={70} />
      <Flower color="#1ba0ff" duration={30} delay={1} left={20} />
      <Flower color="#1b41ff" duration={40} delay={2} left={40} />
      <Flower color="#ff5500" duration={40} delay={11} left={30} />
      <Flower color="#ff874b" duration={30} delay={12} left={60} />
      <Flower color="#ff5500" duration={60} delay={13} left={90} />
      <Flower color="#f9fd39" duration={60} delay={11} left={10} />
      <Flower color="#53ff38" duration={40} delay={12} left={40} />
      <Flower color="#f9fd39" duration={30} delay={13} left={70} />
      <Flower color="#1b41ff" duration={30} delay={11} left={20} />
      <Flower color="#1b41ff" duration={40} delay={12} left={40} />
      <Flower color="#1b41ff" duration={60} delay={20} left={80} />
      <Flower color="#ff5500" duration={40} delay={21} left={30} />
      <Flower color="#ff5500" duration={30} delay={22} left={60} />
      <Flower color="#ff5500" duration={60} delay={23} left={90} />
      <Flower color="#f9fd39" duration={60} delay={21} left={10} />
      <Flower color="#f9fd39" duration={40} delay={22} left={40} />
      <Flower color="#f9fd39" duration={30} delay={23} left={70} />
      <Flower color="#1b41ff" duration={30} delay={21} left={20} />
      <Flower color="#1b41ff" duration={40} delay={22} left={40} />
      <Flower color="#1b41ff" duration={60} delay={25} left={80} />
    </Container>
  );
};

export default Mission;
