import { useState } from "react";
import { Link } from "react-router-dom";
import "./burgerMenu.css";

function BurgerMenu() {
  let [show, setShow] = useState(false);

  return (
    <div>
      <div className="menu-btn" onClick={() => setShow(true)}>
        <div className="menu-btn_solid"></div>
        <div className="menu-btn_solid"></div>
        <div className="menu-btn_solid"></div>
      </div>
      <div
        className={show ? "menu-active menu" : "menu"}onClick={() => setShow(false)}>
        <div className="menu-body" onClick={(e) => e.stopPropagination(e)}>
          <div className="menu-links">
            <Link to={"/borderRadius"}>Radius</Link>
            <Link to={"/widthheight"}>Width Height</Link>
            <Link to={"/boxShadow"}>Box Shadow</Link>
            <Link to={"/textShadow"}>Text Shadow</Link>
            <Link to={"/font"}>Font</Link>
            <Link to={"/flexBox"}>Flex Box</Link>
            <Link to={"/transform"}>Transform</Link>
            <Link to={"/gradient"}>Gradient</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
