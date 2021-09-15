import { Link } from "react-router-dom";
import { members } from "../members";

function Home() {
  return (
    <>
      <div className="Lista">
        {members.map((member) => {
          return member.type === "pj" ? (
            <Link to={`/company/${member.id}`}>{member.name}</Link>
          ) : (
            <Link to={`/customer/${member.id}`}>{member.name}</Link>
          );
        })}
      </div>
    </>
  );
}

export default Home;
