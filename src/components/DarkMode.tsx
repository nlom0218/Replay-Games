import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import styled from "styled-components";

interface IProps {
  darkMode: boolean;
  setDarMode: Function;
}

const Container = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 20px;
  margin: 1.25rem;
  font-size: 1.25em;
  font-size: 1.25rem;
  cursor: pointer;
`;

const DarkMode = ({ darkMode, setDarMode }: IProps) => {
  const onClickIcon = () => {
    setDarMode((prev: boolean) => !prev);
  };
  return (
    <Container onClick={onClickIcon}>
      {darkMode ? (
        <BsFillMoonFill style={{ color: "#ffff60" }} />
      ) : (
        <BsFillSunFill style={{ color: "#d52020" }} />
      )}
    </Container>
  );
};

export default DarkMode;
