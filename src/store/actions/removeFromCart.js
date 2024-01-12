const removeFromCart = (idMeal) =>{
    return {
        type:"REMOVE_FROM_CART",
        payload:idMeal,
    }
}
export default removeFromCart;