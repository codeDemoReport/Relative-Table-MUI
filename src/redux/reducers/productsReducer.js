import GlOBALTYPE from "../action/globalType";

const initialState = {
  cars: [], 
  food: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlOBALTYPE.GET_CARS_SUCCESS:
      return { ...state, cars: [...action.payload] };
    case GlOBALTYPE.GET_CARS_FAIL:
      return state;
    case GlOBALTYPE.GET_FOOD_SUCCESS:
      return { ...state, food: [...action.payload] };
    case GlOBALTYPE.GET_FOOD_FAIL:
      return state;
    default:
      return state;
  }
};

export default productsReducer;
