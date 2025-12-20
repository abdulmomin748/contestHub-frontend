import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("result.user", result.user);

        //create user in the DB
        const userRoleInfo = {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };

        axiosSecure
          .post("/users", userRoleInfo)
          .then((res) => {
            console.log("res.data", res.data);
            toast.success("User Created Successfully");
            navigate(location.state || "/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="btn bg-white w-full mt-2 text-black border-[#e5e5e5]"
    >
      <FcGoogle size={32} />
      Login with Google
    </button>
  );
};

export default SocialLogin;
