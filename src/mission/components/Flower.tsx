import { IoMdFlower } from "react-icons/io";
import styled, { keyframes } from "styled-components";

interface IProps {
  color: string;
  duration: number;
  delay: number;
  left: number;
}

const FlowerAni = keyframes`
    from {
        bottom: 101%;
    }
    to {
        bottom: 0%;
        opacity: 0.2;
    }
`;

const IFlower = styled.div<IProps>`
  position: absolute;
  bottom: 100%;
  left: ${(props) => `${props.left}%`};
  animation: ${FlowerAni} ${(props) => `${props.duration}s`} linear infinite;
  animation-delay: ${(props) => `${props.delay}s`};
  svg {
    color: ${(props) => props.color};
    font-size: 20px;
  }
`;

const Flower = (props: IProps) => {
  return (
    <IFlower {...props}>
      <IoMdFlower />
    </IFlower>
  );
};

export default Flower;
