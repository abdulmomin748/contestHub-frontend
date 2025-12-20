import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { TbUserUp } from "react-icons/tb";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const SignUp = () => {
  const { createUser, updateUserProfile, loading, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const from = location.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (loading) return <LoadingSpinner />;
  if (user) return <Navigate to={from} replace={true} />;

  const handleRegistration = (data) => {
    const proFileImg = data.photo[0];
    console.log("data", data);

    createUser(data.email, data.password)
      .then((result) => {
        console.log("user created successfully");

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

          axiosSecure
            .post("/users", userRoleInfo)
            .then((res) => {
              if (res.data) {
                console.log("user added to User db collection");
              }
            })
            .catch((err) => console.log(err));

          updateUserProfile(userInfo)
            .then(() => {
              toast.success("User Created Successfully");
              navigate(location.state || "/");
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <h1 className="text-3xl mb-4">Create an Account</h1>

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
              className="file-input file-input-xl "
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
        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-lime-500 text-gray-400 cursor-pointer">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <SocialLogin />

        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            state={from}
            to="/login"
            className="hover:underline hover:text-lime-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
