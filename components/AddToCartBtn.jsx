import { useShoppingCart } from "use-shopping-cart";

const AddToCartBtn = ({
  btnStyles,
  text,
  icon,
  currency,
  id,
  name,
  description,
  images,
  price,
}) => {
  const { addItem } = useShoppingCart();

  const product = {
    id: id,
    currency: currency,
    name: name,
    description: description,
    images: images,
    price: price,
  };

  return (
    <button className={`${btnStyles}`} onClick={() => addItem(product)}>
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
