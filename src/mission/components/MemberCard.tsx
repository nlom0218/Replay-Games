import styled from "styled-components";
import { IMember } from "../member";
import {
  AiFillFacebook,
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
  flex-direction: column;
  align-items: center;
  color: #474747;
  text-align: center;
  line-height: 120%;
  svg {
    display: flex;
  }
  div {
    margin: 10px;
    /* color: #ff5555; */
    font-weight: 500;
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
  facebook,
  school,
  avatarUrl,
  contents,
}: IMember) => {
  const onClickSocialBtn = (type: string) => {
    if (type === "github") {
      if (github !== "") {
        window.open(github);
      } else {
        window.alert("등록된 github가 없습니다.");
      }
    }
    if (type === "insta") {
      if (instagram !== "") {
        window.open(instagram);
      } else {
        window.alert("등록된 instagram이 없습니다.");
      }
    }
    if (type === "facebook") {
      if (facebook !== "") {
        window.open(facebook);
      } else {
        window.alert("등록된 facebook이 없습니다.");
      }
    }
  };

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
        <div onClick={() => onClickSocialBtn("github")}>
          <AiFillGithub />
        </div>
        <div onClick={() => onClickSocialBtn("insta")}>
          <AiOutlineInstagram />
        </div>
        <div onClick={() => onClickSocialBtn("facebook")}>
          <AiFillFacebook />
        </div>
      </SocialInfo>
    </Container>
  );
};

export default MemberCard;
