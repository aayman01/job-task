import { Link } from "react-router-dom";
import img from '../assets/log.png'

const Register = () => {
    return (
      <>
        <div className="max-w-6xl mx-auto px-4">
          <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row gap-10">
              <div className="w-1/2">
                <img src={img} alt="" />
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                <h2 className="text-center p-4 text-3xl font-bold">
                  Register your account
                </h2>
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <label className="form-control w-full mb-4">
                    <div className="label">
                      <span className="label-text font-medium">Role</span>
                    </div>
                    <select
                      defaultValue=""
                    //   {...register("role", { required: true })}
                      className="select select-bordered w-full"
                    >
                      <option disabled value="">
                        Select a role
                      </option>
                      <option value="User">User</option>
                      <option value="Seller">Agent</option>
                    </select>
                    {/* {errors.role && (
                      <span className="text-red-500 mt-2">
                        Role is required
                      </span>
                    )} */}
                  </label>
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
                      className="btn btn-main hover:bg-[#ff7404] hover:text-white"
                      type="submit"
                      value="Register"
                    />
                  </div>
                </form>
                <p className="text-center text-black mt-4 pb-10 font-medium">
                  Already have an account?
                  <Link
                    className="text-red-600 font-medium underline decoration-red-600"
                    to="/register"
                  >
                    {" "}
                    Please Login
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Register;