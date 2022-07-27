import MemberCard from "./components/MemberCard";
import member from "./member";

const Mission = () => {
  return (
    <div>
      {member.map((item, index) => {
        return <MemberCard key={index} {...item} />;
      })}
    </div>
  );
};

export default Mission;
