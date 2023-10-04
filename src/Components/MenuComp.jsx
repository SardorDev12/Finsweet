import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Components/Button";
import { memo } from "react";

function MenuComp({ data, amount }) {
  return (
    <div className="menu-container">
      {data?.slice(0, amount).map((item, index) => {
        return (
          <div className="menu-item" key={index}>
            <img src={item.img} alt="menu item" />
            <div className="item-info">
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default memo(MenuComp);
