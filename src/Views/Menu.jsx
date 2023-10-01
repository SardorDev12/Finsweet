import { useLoaderData } from "react-router-dom";

function Menu() {
  const data = useLoaderData();
  return (
    <section className="sub-menu">
      <ul>
        {data.map((menu) => {
          return <li>{menu.title}</li>;
        })}
      </ul>
    </section>
  );
}
export default Menu;

export const menuLoader = async () => {
  const res = await fetch("http://localhost:3001/products");

  return res.json();
};
