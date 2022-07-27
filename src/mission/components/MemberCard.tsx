import styled from "styled-components";
import { IMember } from "../member";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

interface IImage {
  avatarUrl: string;
}

const Container = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 40px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: transform 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.05);
  }
  > div:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const RealAvatar = styled.img`
  width: 80px;
  height: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Avatar = styled.div<IImage>`
  width: 80px;
  height: 80px;
  background: #b2b2b2;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const School = styled.div`
  font-size: 14px;
  color: #474747;
`;

const Contents = styled.div`
  font-size: 14px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  color: #474747;
  svg {
    display: flex;
  }
  span:first-child {
    /* align-self: start; */
  }
  span:last-child {
    /* align-self: end; */
  }
  div {
    margin: 10px;
  }
`;

const SocialInfo = styled.div`
  margin-top: 20px;
  width: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  svg {
    display: flex;
    color: #474747;
    cursor: pointer;
  }
`;

const MemberCard = ({
  name,
  github,
  instagram,
  mail,
  school,
  avatarUrl,
  contents,
}: IMember) => {
  console.log(avatarUrl);

  return (
    <Container>
      {avatarUrl !== "" ? (
        <RealAvatar src={avatarUrl} alt="avatar" />
      ) : (
        <Avatar avatarUrl={avatarUrl}></Avatar>
      )}
      <Name>{name}</Name>
      <School>{school !== "" ? school : "학교를 설장하지 않았습니다."}</School>
      {contents !== "" && (
        <Contents>
          <span>
            <ImQuotesLeft />
          </span>
          <div>{contents}</div>
          <span>
            <ImQuotesRight />
          </span>
        </Contents>
      )}
      <SocialInfo>
        <div>
          <AiFillGithub />
        </div>
        <div>
          <AiOutlineInstagram />
        </div>
        <div>
          <AiOutlineMail />
        </div>
      </SocialInfo>
    </Container>
  );
};

export default MemberCard;
