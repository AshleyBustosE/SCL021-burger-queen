import "./CustomerData.css";
import { Link } from "react-router-dom"

const CustomerData = () => {
  return (
    <div className="pageCustomerData">
      <img id="machine-Flint" src="machineFlint.png" alt="machine-Flint" />
      <div className="customerInfo">
        <h3>Nombre:</h3>
        <input type="text" class="input" placeholder="Nombre"></input>
        <h3>Mesa:</h3>
        <input type="number" class="input" placeholder="Mesa"></input>
        <button><Link to="/CustomerOrder">Ir a pedido</Link></button>
      </div>
    </div>
  );
};

export default CustomerData;
