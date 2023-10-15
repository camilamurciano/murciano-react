import ProductCard from "../../common/cartWidget/productCard/ProductCard";
import "./itemList.css";
const ItemList = ({ items }) => {
  //console.log(items[0]?.title);

  return (
    //<div>ItemList</div>;
    <section className="card">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemList;
