import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css";

function LoginForm() {
  function Login(){

  }
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderradius: 1 }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      placeholder="Username"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typeEmailX"
                      placeholder="Password"
                      className="form-control form-control-lg"
                    />
                  </div>
                  
                  <p className="small mb-3 pb-lg-2">
                    <Link className="text-white-50" to={"/Registration"}>
                      New Here?
                    </Link>
                  </p>

                 <Link to={'/admin'} >
                   <button
                       className="btn btn-outline-light btn-lg px-5"
                       type="submit" onClick={()=>Login()}
                   >
                     Login
                   </button>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
