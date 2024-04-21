import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "@containers";
import "./style.scss"
const index = () => {

  const navigate = useNavigate()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const payload = {
      username: e.target[0].value,
      password: e.target[1].value,
      phone: e.target[2].value
    }
    try{
      const res = await axios.post("http://45.138.158.252:3000/auth/register", payload)
      if (res.status === 201) {
        navigate("/")
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
          <p className="text-slate-900 font-semibold text-[30px] mb-6">Registration</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
            <input className="w-full outline-none ring-2 ring-slate-300 focus:ring-slate-900 h-[40px] p-2 duration-200 rounded-sm text-slate-900 text-[18px] font-semibold" type="text" placeholder="Name" required/>
            <input className="w-full outline-none ring-2 ring-slate-300 focus:ring-slate-900  h-[40px] p-2 duration-200 rounded-sm text-slate-900 text-[18px] font-semibold" type="password" placeholder="Password" required/>
            <input className="w-full outline-none ring-2 ring-slate-300 focus:ring-slate-900  h-[40px] p-2 duration-200 rounded-sm text-slate-900 text-[18px] font-semibold" type="tel" placeholder="Phone number" />
            <button type="submit" className="bg-slate-900 w-full py-2 text-white text-[20px] font-semibold rounded-sm">
              Submit
            </button>
          </form>
          <p className="font-semibold text-[18px] cursor-pointer mt-2" onClick={() => navigate("/")}>Login</p>
        </div>
      </Container>
    </div>
  );
};

export default index;