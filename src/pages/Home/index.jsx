import { Link } from "react-router-dom";
import { members } from "../members";
import "./styles.css";

function Home() {
  return (
    <div>
      <h1>Cartões de Visita</h1>
      <p>Clique em um dos Nomes abaixo para exibir o cartão de Visita</p>
      <div className="Lista">
        {members.map((member) => {
          return member.type === "pj" ? (
            <Link to={`/company/${member.id}`}>{member.name}</Link>
          ) : (
            <Link to={`/customer/${member.id}`}>{member.name}</Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
