import styled from "styled-components";
import MemberCard from "./components/MemberCard";
import member from "./member";

const Container = styled.div`
  background: linear-gradient(#8000ff6d, #e100ff6d);
  min-height: 100vh;
`;

const MemberList = styled.div`
  padding: 40px;
  max-width: 320px;
  margin: 0 auto;
  div:not(:last-child) {
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
    </Container>
  );
};

export default Mission;
