import GlOBALTYPE from "./globalType";

export function getCars(params) {
  return { type: GlOBALTYPE.GETCARS, payload: params? params:{} };
};
export function getFood(params) {
  return { type: GlOBALTYPE.GET_FOOD, payload: params? params:{} };
};
