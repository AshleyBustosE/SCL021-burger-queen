import { Link } from "react-router-dom";
import menu from "../data/menu.json";
import { useState } from "react";

import "./CustomerOrder.css";

const breakfast = menu.breakfast;
const lunch = menu.lunch;
console.log(breakfast);
console.log(lunch);

function MyButton() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
}

function ListBreakfast() {
   const listItemsBreakfast = breakfast.map((productBreakfast) => 
     <li key={productBreakfast.id}>
        {productBreakfast.item}
     </li>
   );
  return (
  <ul>{listItemsBreakfast}</ul>
  );
}

function ListLunch() {
  const listItemsLunch = lunch.map((productLunch) => 
    <li key={productLunch.id}>
       {productLunch.item}
    </li>
  );
 return (
 <ul>{listItemsLunch}</ul>
 );
}

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//       <ShoppingList />
//     </div>
//   );
// }

const CustomerOrder = () => {
  //console.log(ListMenu);
  return (
    <div className="pageCustomerOrder">
      <div className="customerData">
        <p>Nombre:</p>
        <input type="text" placeholder="Nombre cliente" />
        <p>Mesa:</p>
        <input type="number" placeholder="Mesa" />
      </div>
      <div className="dailyMenu">
        <div className="breakfastMenu">
          <MyButton />
          <MyButton />
          <ListBreakfast />
          <ListLunch />
        </div>
        <div className="lunchMenu"></div>
      </div>
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
