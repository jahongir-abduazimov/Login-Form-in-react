// import { useEffect, useState } from "react";
import { Container } from "@containers";
import "./style.scss";
// import axios from "axios";
const index = () => {
  // const [title, setTitle] = useState("");
  // const [brands, setBrands] = useState([]);
  // let token = localStorage.getItem("token");
  // const getBrands = async () => {
  //   try {
  //     const response = await axios
  //       .get("http://45.138.158.252.:3000/brands", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         setBrands(res.data);
  //       });
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getBrands();
  // }, []);

  // const addBrand = () => {
  //   axios.post(
  //     "http://45.138.158.252:3000/brands",
  //     {
  //       name: title
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       }
  //     }
  //   );
  // };

  return (
    <div>
      <Container>
        <h1 className="font-semibold text-[30px] p-4">Brands page</h1>

        <input type="text" placeholder="Brand name" />
        {/* <button onClick={addBrand} className="border px-3 py-1 border-black">
          Add
        </button> */}
        
        {/* <div>
          {brands.map((brand, index :any) => {
            return (
              <div key={index}>
                <p className="font-semibold text-[30px] p-4">{brand?.name}</p>
              </div>
            );
          })}
        </div> */}
      </Container>
    </div>
  );
};

export default index;
