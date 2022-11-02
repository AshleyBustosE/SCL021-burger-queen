import "./Who.css";
import { Link } from "react-router-dom";

const Who = () => {
  return (
    <div className="pageWho">
      <div className="work-income">
        <h1>¿Quién eres?</h1>
        <button><Link to="/CustomerData">Mesero</Link></button>
        <button><Link to="/Kitchen">Jefe de cocina</Link></button>
      </div>
      <div className="imgFlintLoco">
        <h1>FLINT LOCO BURGERS</h1>
        <img src="flintLoco.png" alt="flint-saluda" />
      </div>
    </div>
  );
};

export default Who;

