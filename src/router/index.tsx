import { createHashRouter, Navigate } from "react-router-dom";
import CatalogoPage from "../pages/catalogo/CatalogoPage";
import Layout from "../pages/layout/Layout";
import MarcaPage from "../pages/catalogo/MarcaPage";
import ModeloPage from "../pages/catalogo/ModeloPage";
import ColorPage from "../pages/catalogo/ColorPage";
import TallaPage from "../pages/catalogo/TallaPage";

const routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/catalogo" />,
      },
      {
        path: "/catalogo",
        element: <CatalogoPage />,
      },
      {
        path: "/catalogo/marca",
        element: <MarcaPage />,
      },
      {
        path: "/catalogo/modelo",
        element: <ModeloPage />,
      },
      {
        path: "/catalogo/color",
        element: <ColorPage />,
      },
      {
        path: "/catalogo/talla",
        element: <TallaPage />,
      },
    ],
  },
]);

export default routes;
