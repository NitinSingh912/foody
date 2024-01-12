const addMealInCart = (meal)=>{
    return {
        type:"ADD_IN_CART",
        payload:meal,
    }
}
export default addMealInCart;