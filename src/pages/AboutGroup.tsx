import styled from "styled-components";
import { colors } from "../styles";

const Layout = styled.div`
  background-image: url("https://img.freepik.com/free-vector/dark-low-poly-background_1048-7971.jpg?w=360");
  color: ${colors.backgroundColor};
  background-attachment: fixed;
  padding: 120px 60px;
  padding: 7.5rem 3.75rem;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 40px;
  column-gap: 2.5rem;
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
    margin-bottom: 1.25rem;
    text-align: start;
    width: 100%;
    padding: 10px;
    padding: 0.625rem;
    background-image: url("https://ouch-cdn2.icons8.com/SlrCIj15RW_c4lbF5oIPT7y6Aqnlt4GYfAtM5q3PUSs/rs:fit:256:263/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjQw/LzRmZWQyOTYwLWVh/NWQtNDRiNS1hOWFi/LTI0NmZmMjc1MTJl/OC5wbmc.png");
    background-repeat: no-repeat;
    color: ${colors.darkColor};
  }
`;

const Description = styled.div`
  padding: 20px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Text = styled.div`
  line-height: 160%;
  letter-spacing: 1px;
`;

const AboutGroup = () => {
  return (
    <Layout>
      <Box>
        <Title>
          <div>초등 교사</div>
          <div>게임제작 커뮤니티</div>
        </Title>
        <Description>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur ipsa nulla adipisci nemo, quia inventore suscipit
            officia laboriosam voluptatem accusantium voluptatum dicta, tenetur
            quisquam ipsum? Maxime soluta id enim reprehenderit?
          </Text>
        </Description>
      </Box>
    </Layout>
  );
};

export default AboutGroup;
