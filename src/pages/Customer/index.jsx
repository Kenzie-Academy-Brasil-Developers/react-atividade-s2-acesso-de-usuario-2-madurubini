import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../members";

function Customer() {
  const { id } = useParams();
  const member = members.find((member) => member.id === id);
  return (
    <>
      <div className="Card">
        <h1>Detalhes do Cliente</h1>
        <Link to="/">Voltar</Link>
        <p>Nome: {member && member.name}</p>
      </div>
    </>
  );
}

export default Customer;
