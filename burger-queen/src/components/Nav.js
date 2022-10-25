import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Who</Link>
        </li>
        <li>
          <Link to="/CustomerData">Customer Data</Link>
        </li>
        <li>
          <Link to="/CustomerOrder">Customer Order</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
