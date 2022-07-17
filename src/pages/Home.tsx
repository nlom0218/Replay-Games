import styled from "styled-components";

const Container = styled.div`
  height: 200vh;
  display: flex;
  justify-content: space-between;
  img {
    width: 600px;
    height: 600px;
  }
`;

const Home = () => {
  return (
    <Container>
      <div>Home</div>
      <img src="/img/game.png" />
    </Container>
  );
};

export default Home;
