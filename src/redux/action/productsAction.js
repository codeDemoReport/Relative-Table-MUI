import GlOBALTYPE from "./globalType";

export function getCars(params) {
  return { type: GlOBALTYPE.GETCARS, payload: params ? params : {} };
}

export function getFood(params) {
  return { type: GlOBALTYPE.GET_FOOD, payload: params ? params : {} };
}

export function editCar(params) {
  return { type: GlOBALTYPE.EDIT_CAR, payload: params };
}

export function editFood(params) {
  return { type: GlOBALTYPE.EDIT_FOOD, payload: params };
}

export function deleteCar(params) {
  return { type: GlOBALTYPE.DELETE_CAR, payload: params };
}

export function deleteFood(params) {
  return { type: GlOBALTYPE.DELETE_FOOD, payload: params };
}
