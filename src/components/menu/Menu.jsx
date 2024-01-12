import React from "react";
import "./menu.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getIndianMealViaAPI from "../../store/actions/getIndianMeal";
import { FaStar } from "react-icons/fa6";
import addMealInCart from "../../store/actions/addMealInCart";

const Menu = () => {
  const dispatch = useDispatch();
  const indianMeal = useSelector((state) => state.indianMeal);
 
  useEffect(() => {
    dispatch(getIndianMealViaAPI());
  }, []);
  return (
    <div className="outer-menu-page">
      <div className="inner-menu-page">
        {indianMeal.length === 0 ? (
          <h2>Wait for the Meal to Load ....</h2>
        ) : (
          indianMeal.map((item, index) => {
            return (
              <div key={index} className="meal-list">
                <div className="left-side-of-meal">
                  <div className="meal-name">
                    <h2>{item.strMeal}</h2>
                  </div>
                  <div className="rating">
                    <h3>{Math.round(Math.random() * 3 + 2)} </h3>

                    <FaStar size={18} />
                  </div>
                  <div className="meal-price">
                    <h4> RS {item.price}</h4>
                  </div>
                  <div className="meal-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam facilis mollitia error ducimus itaque consequuntur?
                  </div>
                </div>
                <div className="right-side-of-meal">
                  <div className="meal-img">
                    <img src={item.strMealThumb} alt="meal image" />
                  </div>
                  <div className="meal-button">
                    <button onClick={()=>dispatch(addMealInCart(item))}>ADD</button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Menu;
