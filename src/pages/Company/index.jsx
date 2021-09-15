import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../members";
import "./styles.css";

function Company() {
  const { id } = useParams();
  const member = members.find((member) => member.id === id);
  return (
    <>
      <div className="Card">
        <h1>Detalhes da Empresa</h1>
        <Link to="/">Voltar</Link>

        <p>Nome da empresa: {member && member.name}</p>
      </div>
    </>
  );
}

export default Company;
