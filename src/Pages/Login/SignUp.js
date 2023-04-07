import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {register, formState: { errors }, handleSubmit} = useForm();
  const {createUser, updateUser, googleSignIn} = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = (data) => {
    googleSignIn(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      toast('User Created Successfully.')
      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(() => {
        navigate('/');
      })
      .catch(err => console.log(err))
    })
    .catch(error => {
      console.log(error)
      setSignUpError(error.message)
    });
  }
  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError('');
    createUser(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user);
      toast('User Created Successfully.')
      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(() => {
        navigate('/');
      })
      .catch(err => console.log(err))
    })
    .catch(error => {
      console.log(error)
      setSignUpError(error.message)
    });
  };
  return (
    <div className="h-[650px] flex justify-center items-center">
      <div className="w-96 shadow-lg p-7">
        <h2 className="text-xl text-center font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Type your Name"})}
              aria-invalid={errors.firstName ? "true" : "false"}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}{" "}
          </div>
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
              placeholder="@ssgWdss123"
              {...register("password", {
                required: "Password is required",
                minLength: {value: 6, message: 'password must be 6 characters or longer'},
                pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, message: 'Password must be strong'}
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}{" "}

          </div>
          <input
            className="btn btn-accent w-full mb-1 mt-4"
            value="sign up"
            type="submit"
          />
          {signUpError && <p className="text-sm text-red-600">{signUpError}</p>}
        </form>
        <p className="">
          Already have an account?{" "}
          <Link to="/login" className="text-secondary">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
