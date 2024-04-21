import { Home, Products, Brands, Contact, ErrorPage } from "@pages";

const router = [
  {
    path: "/main",
    element: <Home />,
    content:"Home",
  },
  {
    path: "/main/products",
    element: <Products />,
    content:"Products",
  },
  {
    path: "/main/brands",
    element: <Brands />,
    content:"Brands"
  },
  {
    path: "/main/contact",
    element: <Contact />,
    content:"Contact"
  },
  {
    path: "*",
    element: <ErrorPage />
  }
];

export default router;
