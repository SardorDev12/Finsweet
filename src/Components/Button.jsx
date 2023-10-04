import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { memo } from "react";

function Button({ title, clas, hideBtn, where }) {
  return (
    <button type="button" className={`${hideBtn ? "hidden" : ""}  ${clas}`}>
      <Link to={where}>
        {title}
        <FaArrowRight />
      </Link>
    </button>
  );
}
export default memo(Button);
