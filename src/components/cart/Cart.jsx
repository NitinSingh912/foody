import React, { useEffect } from "react";
import "./cart.css";
import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import removeFromCart from "../../store/actions/removeFromCart";

const Cart = () => {
  const mealsInCart = useSelector((state) => state.mealsInCart);
  const [cartMeal, setCartMeal] = useState([...mealsInCart]);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    function makeAnArrayOfEachMeal() {
      let array = cartMeal.map((i) => {
        return i.price * i.quantity;
      });
      let finalPrice = array.reduce((a, b) => a + b, 0);
      setTotalPrice(finalPrice);
    }

    makeAnArrayOfEachMeal();
  }, [cartMeal]);

  // const calculatePrice=useMemo(()=> {
  //   let priceOfMeals = cartMeal.reduce(
  //     (item) => item.price * item.quantity,
  //     1
  //   );
  //   console.log(priceOfMeals)
  // },[totalPrice])
  function addQuantity(id) {
    let finalMealInCart = cartMeal.map((item) => {
      if (item.idMeal === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartMeal(finalMealInCart);
  }
  function subQuantity(meals) {
    if (meals.quantity <= 1) {
      dispatch(removeFromCart(meals.idMeal));
    } else {
      let finalMealInCart = cartMeal.map((item) => {
        if (item.idMeal === meals.idMeal) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCartMeal(finalMealInCart);
    }
  }
  //   const indianMeal = useSelector((state) => state.indianMeal);

  return (
    <div className="outer-cart-page">
      <div className="inner-cart-page">
        {cartMeal.length === 0 ? (
         

          <h2 className="nothing-in-cart">Nothing in Cart ....</h2>
        
        ) : (
          cartMeal.map((item, index) => {
            return (
              <div key={index} className="meal-list">
                <div className="left-side-of-meal">
                  <div className="meal-name">
                    <h2>{item.strMeal}</h2>
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
                  <div className="cart-button">
                    <div>
                      <button onClick={() => addQuantity(item.idMeal)}>
                        +
                      </button>
                      <h2>{item.quantity}</h2>
                      <button onClick={() => subQuantity(item)}>-</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
        {cartMeal.length === 0 ? (
          ""
        ) : (
          <div className="footer">
            <div className="total-price">
              <h2>Total Price : RS {totalPrice}</h2>
            </div>
            <form>
              <button type="submit">Checkout</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
