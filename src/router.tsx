import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, {loader as productsLoader} from "./views/Products";
import NewProduct ,{ action as newProductActions } from "./views/NewProduct";
import EditProduct, {loader as editProductLoader, action as editProductAction} from "./views/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetails";


export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />, 
    children: [
        {
            index: true,
            element: <Products />,
            loader: productsLoader
        },
        {
            path: "productos/nuevo",
            element: <NewProduct />,
            action: newProductActions
        },
        {
            path: "productos/:id/editar", //ROA pattern
            element: <EditProduct/>,
            loader: editProductLoader,
            action: editProductAction
        },
        {
            path: "productos/:id/eliminar",
            action: deleteProductAction
        }
    ],
        
}])