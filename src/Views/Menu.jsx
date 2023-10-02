import { FaArrowRight } from "react-icons/fa";
import MenuComp from "../Components/MenuComp";
import { useDataContext } from "../Layouts/GlobalContext";
import "../styles/menu.scss";
import { useState } from "react";

function Menu() {
  // Data
  const data = useDataContext();
  const [products, setProducts] = useState(data.products);
  const [filteredProducts, setFilteredProducts] = useState(data.products);
  // Categories
  const categories = new Set();
  products?.forEach((item) => {
    categories.add(item.category);
  });
  const categoriesArray = Array.from(categories);
  const filterProducts = (cat) => {
    const newProducts = products.filter((product) => {
      return product.category === cat;
    });
    setFilteredProducts(newProducts);
  };
  return (
    <div className="ourmenu page">
      <div className="container">
        <div className="section-heading">
          <h4 className="section-subtitle">
            Our Menu
            <FaArrowRight className="section-subtitle__icon" />
          </h4>
          <div className="section-heading__title">
            <h2>Discover Our menu Chart</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.. Through True Rich Attended does no end it his mother
            </p>
          </div>
        </div>
        <div className="menu-categories">
          <button
            onClick={() => setFilteredProducts(products)}
            className="btn"
            type="button"
          >
            all
          </button>
          {categoriesArray.map((item, index) => {
            return (
              <button
                onClick={() => filterProducts(item)}
                className="btn"
                type="button"
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>
        <MenuComp data={filteredProducts} amount={products?.length} />
      </div>
    </div>
  );
}
export default Menu;
