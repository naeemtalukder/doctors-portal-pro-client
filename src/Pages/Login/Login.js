import React, {useContext, useState} from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {signIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch(error => {
      console.log(error.message)
      setLoginError(error.message)
    });
  };
  return (
    <div className="h-[650px] flex justify-center items-center">
      <div className="w-96 shadow-lg p-7">
        <h2 className="text-xl text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.firstName ? "true" : "false"}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}{" "}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {value: 6, message: 'password must be 6 characters or longer'}
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}{" "}
            <label className="label mb-1">
              <Link className="label-text-alt">Forget Password?</Link>
            </label>
          </div>
          <input
            className="btn btn-accent w-full mb-1"
            value="login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600 test-xs">{loginError}</p>}
          </div>
        </form>
        <p className="text-sm">
          New to Doctors Portal pro?{" "}
          <Link to="/signup" className="text-secondary">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
