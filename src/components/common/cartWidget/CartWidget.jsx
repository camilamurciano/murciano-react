import { BsCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <span style={{ size: "32px" }}>0</span>
      <BsCartCheckFill size={32} />
    </div>
  );
};

export default CartWidget;
