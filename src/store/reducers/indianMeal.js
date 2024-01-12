const indianMeal = (state=[],action)=>{
    switch(action.type){
        case "INDIAN_MEAL":
            let newState = [...action.payload]
            let modifyNewState = newState.map(item=>{
                return {
                    ...item,
                    price:Math.round(Math.random()*40+90)
                }
            })
            return modifyNewState;
        case "ERROR" :
            return action.payload;
            default :
            return state
    }
}
export default indianMeal;