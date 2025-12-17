import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { TbUserUp } from "react-icons/tb";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    const proFileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        const formData = new FormData();
        formData.append("image", proFileImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          const photoURL = res.data.data.url;

          const userInfo = {
            displayName: data.name,
            photoURL: photoURL,
          };

          const userRoleInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoURL,
          };

          axiosSecure.post("/users", userRoleInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to DB");
            }
          });

          updateUserProfile(userInfo)
            .then(() => {
              navigate(location.state || "/");
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-3xl text-left card bg-base-100 shrink-0 shadow-2xl">
      <h1 className="text-3xl mb-4">Create an Account</h1>
      <p className="mb-4">Register with ZapShift</p>

      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label
            htmlFor="fileInput"
            className="w-12 h-12 border-2 rounded-full cursor-pointer"
          >
            <TbUserUp className="text-5xl" />
          </label>

          <input
            id="fileInput"
            type="file"
            accept="image/png, image/jpeg"
            {...register("photo", { required: true })}
            className="file-input file-input-xl hidden"
          />
          {errors.photo?.type === "required" && (
            <p className="text-left text-red-600">photo is required</p>
          )}

          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input w-full"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-left text-red-600">name is required</p>
          )}

          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-left text-red-600">email is required</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
            className="input w-full"
            placeholder="Password is required"
          />

          {errors.password?.type === "minLength" && (
            <p className="text-red-900">Password must be 6 characters</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-900">
              Password must include uppercase, lowercase, number & special
              character
            </p>
          )}

          <a className="link link-hover">Forgot password?</a>

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>

      <p>
        Already have an account?{" "}
        <Link state={location.state} className="underline" to={"/login"}>
          Login
        </Link>
      </p>

      <span className="text-center block">Or</span>
      <SocialLogin />
    </div>
  );
};

export default SignUp;
