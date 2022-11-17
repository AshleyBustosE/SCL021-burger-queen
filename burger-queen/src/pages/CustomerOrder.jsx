import { Link } from "react-router-dom";
import menu from "../data/menu.json";

import "./CustomerOrder.css";

const breakfast = menu.breakfast;
const lunch = menu.lunch;
console.log(breakfast);
console.log(lunch);
const CustomerOrder = () => {
  //console.log(ListMenu);
  return (
    <div className="pageCustomerOrder">
      <div>
      </div>
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
