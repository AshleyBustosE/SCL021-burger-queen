import "./CustomerOrder.css";
import { Link } from "react-router-dom";

const CustomerOrder = () => {
  return (
    <div className="pageCustomerOrder">
      <div></div>
      <div></div>
      <div className="waiter">
        <div className="orderList">
          <h3>Orden</h3>
        </div>
        <div className="orderTotal">
          <h3>$</h3>
        </div>
        <div className="sendToKitchen">
          <button><Link to="/Kitchen">Enviar a cocina</Link></button>
        </div>
      </div>
    </div>
    );
};

export default CustomerOrder;
