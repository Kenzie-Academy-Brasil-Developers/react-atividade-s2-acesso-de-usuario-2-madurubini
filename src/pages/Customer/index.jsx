import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../members";

function Customer() {
  const { id } = useParams();
  const member = members.find((member) => member.id === id);
  return (
    <>
      <div>
        <h1>Detalhes do Cliente</h1>
        <p>Nome: {member && member.name}</p>
      </div>
      <Link to="/">Voltar</Link>
    </>
  );
}

export default Customer;
