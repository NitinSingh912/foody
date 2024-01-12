import axios from "axios";

function getIndianMeal(meal) {
  return {
    type: "INDIAN_MEAL",
    payload: meal,
  };
}
function apiError(error) {
  return {
    type: "ERROR",
    payload: error,
  };
}
function getIndianMealViaAPI() {
  return async (dispatch, getState) => {
    try {
      let meal = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
      );
      let indianMeal = meal.data.meals;

      dispatch(getIndianMeal(indianMeal));
    } catch (error) {
      dispatch(apiError(error.message));
    }
  };
}
export default getIndianMealViaAPI;
