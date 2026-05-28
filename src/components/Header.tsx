import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>BearBasket</div>
      <Link to="/home">Home</Link>
      <Link to="/cart">View Cart</Link>
    </>
  );
};

export default Header;
