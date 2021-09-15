import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../members";

function Company() {
  const { id } = useParams();
  const member = members.find((member) => member.id === id);
  return (
    <>
      <div>
        <h1>Detalhes da Empresa</h1>
        <p>Nome da empresa: {member && member.name}</p>
      </div>
      <Link to="/">Voltar</Link>
    </>
  );
}

export default Company;
