import axios from "axios";
import { Container } from "@containers";
import { useNavigate } from "react-router-dom";
import "./style.scss"
import { useEffect } from "react";
const index = () => {

  const navigate = useNavigate()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const payload = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    try {
      if (e.target[0].value === "" || e.target[1].value === "") {
        alert("fill all the fields")
      } else {
        const res = await axios.post("http://45.138.158.252:3000/auth/login", payload)
        if (res.status === 201) {
          localStorage.setItem("token", res?.data?.accessToken);
          navigate("/main")
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  function Login() {
    if (localStorage.getItem("token")) {
      navigate("/main")
    }
  }

  useEffect(() => {
    Login()
  },[])

  return (
    <div>
      <Container>
        <div className="shadow-[0px_5px_20px_5px_silver] rounded-md w-[500px] mx-auto mt-[200px] px-12 py-8">
          <p className="text-slate-900 font-semibold text-[30px] mb-6">Login</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
            <input className="w-full outline-none ring-2 ring-slate-300 focus:ring-slate-900 h-[40px] p-2 duration-200 rounded-sm text-slate-900 text-[18px] font-semibold" type="text" placeholder="Name" />
            <input className="w-full outline-none ring-2 ring-slate-300 focus:ring-slate-900  h-[40px] p-2 duration-200 rounded-sm text-slate-900 text-[18px] font-semibold" type="password" placeholder="Password" />
            <button type="submit" className="bg-slate-900 w-full py-2 text-white text-[20px] font-semibold rounded-sm">
              Submit
            </button>
          </form>
          <p className="font-semibold text-[18px] cursor-pointer mt-2" onClick={() => navigate("/register")}>Registrate</p>
        </div>
      </Container>
    </div>
  );
};

export default index;