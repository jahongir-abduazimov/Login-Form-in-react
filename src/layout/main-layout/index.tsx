import { Outlet } from "react-router-dom";
import { Header } from "@components";
import { Main } from "@containers";
import "./style.scss";

const index = () => {
  function tokenList() {
    let token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }
  tokenList();

  return (
    <>
      <Header />
      <Main>
        <Outlet/>
      </Main>
    </>
  );
};

export default index;
