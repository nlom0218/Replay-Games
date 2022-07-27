import { IMember } from "../member";

const MemberCard = ({ name, github, instagram, mail, school }: IMember) => {
  return <div>{name}</div>;
};

export default MemberCard;
