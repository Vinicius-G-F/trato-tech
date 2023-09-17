import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import categorias from "./reducers/categorias";
import itens from "./reducers/itens";
import carrinho from "./reducers/carrinho";
import busca from "./reducers/busca";

const store = configureStore({
    reducer: {
        categorias: categorias,
        itens: itens,
        carrinho: carrinho,
        busca: busca
    }
})

const rootReducer = combineReducers({
    categorias: categorias,
    itens: itens,
    carrinho: carrinho,
    busca: busca
  });

export type RootState = ReturnType<typeof rootReducer>;

export default store;