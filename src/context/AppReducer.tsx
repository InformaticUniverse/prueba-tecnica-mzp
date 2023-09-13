import { ProductElement } from "@/interfaces/Product";

export interface AppState {
  products: ProductElement[],
}

type AppAction = 
  | {type: "setProducts", payload: ProductElement[]}

export const AppReducer = (state: AppState, action: AppAction) : AppState => {
  switch (action.type) {
    case "setProducts":
      return{
        ...state,
        products: action.payload
      }
  
    default:
      return{
        ...state,
      }
  }
}