import { ProductElement } from "@/interfaces/Product";
import { createContext, useReducer, useRef } from "react";
import { AppReducer } from "./AppReducer";

type AppState = {
  products: ProductElement[],
}

export const initialState : AppState = {
  products:[]
}

export interface ContextProps {
  localProducts: ProductElement[],
  setProducts : (products : ProductElement[]) => void
}

const AppContext = createContext({} as ContextProps)

export const AppProvider = ({children} : any) => {

  const [appState, dispatch] = useReducer(AppReducer, initialState)

  let localProducts = useRef(initialState.products).current;

  const setProducts = (products : ProductElement[]) => {
    dispatch({type: "setProducts", payload: products})

  }

  return(
    <AppContext.Provider value={{
      localProducts,
      setProducts
    }}>
      {children}
    </AppContext.Provider>
  )
}