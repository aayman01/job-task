import { Link } from "react-router-dom";
import img from '../assets/log.png'

const Login = () => {
    return (
      <>
        <div className="max-w-6xl mx-auto px-4 my-10">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
              <div className="w-1/2">
                <img src={img} alt="" />
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                <h2 className="text-center p-4 text-3xl font-bold">
                  Login your account
                </h2>
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Type your email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">PIN</span>
                    </label>
                    <input
                      type="password"
                      name="PIN"
                      placeholder="Type your PIN"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-main hover:bg-[#ff7404]"
                      type="submit"
                      value="Login"
                    />
                  </div>
                </form>
                <p className="text-center text-black mt-4 pb-10 font-medium">
                  Do not have an account?
                  <Link
                    className="text-red-600 font-medium underline decoration-red-600"
                    to="/register"
                  >
                    {" "}
                    Register
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;