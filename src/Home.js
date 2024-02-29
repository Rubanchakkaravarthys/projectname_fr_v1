import { useState } from "react";
import React from "react";
import Signin from "./Signin"
import Signup from "./Signup";



const Home = () => {
  const [isLoggedIn, changeComp] = useState(true);

  const signin = () => {

    changeComp(false);
    console.log(isLoggedIn);
  };

  const signup = () => {
    changeComp(true);
    console.log(isLoggedIn);
  }

  return (
    <div>
      <div class="container mt-4 ">
        <div class="row justify-content-center mt-3 ms-0 me-0 pb-3">
          <div class="card shadow col-md-6 rounded" style={{ width: "27rem" }}>
            <div class="row head p-2  head">
              <h2 class="text-center text-white ">FoodRestarunt</h2>
            </div>
            <div class="text-center text-white icon-white mt-3">
              
            </div>
            <div class="card-body mt-2">
              <div class="text-center">
                <button type="button" class="btn  w-50" onClick={signup}>Signup</button>
                <button type="button" class="btn  w-50" onClick={signin}>Signin</button>

              </div>
              {isLoggedIn === true ? <Signup /> : <Signin />}

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;