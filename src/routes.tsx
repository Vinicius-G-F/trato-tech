import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaginaPadrao from "components/PaginaPadrao";
import Categoria from "pages/Categoria";
import Carrinho from "pages/Carrinho";


export default function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
                    <Route path="/carrinho" element={<Carrinho />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}