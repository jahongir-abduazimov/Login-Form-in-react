import { NavLink } from "react-router-dom";
import { Container } from "@containers";
import Links from "@router-files"
import logo from "@images/react.svg";
import "./style.scss";

const index = () => {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = '/';
  }
  return (
    <header className="bg-slate-900 px-4">
      <Container>
      <nav className="flex justify-between items-center h-[90px]">
        <NavLink to="/main">
          <img src={logo} alt="logo" />
        </NavLink>
        <ul className="flex gap-x-16">

          {
            Links?.map((link: any) => {
              return (
                <li key={link.path}>
                  <NavLink className="text-white" to={link.path}>{link.content}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button onClick={logOut} className="text-white font-semibold text-[20px] py-2 px-4 border border-white rounded-lg">Logout</button>
      </nav>
      </Container>
    </header>
  );
};

export default index;
