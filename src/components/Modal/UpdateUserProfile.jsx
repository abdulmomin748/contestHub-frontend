import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUserProfile = ({ setIsOpen, isOpen }) => {
  const { register, handleSubmit } = useForm();
  const { user, updateUserProfile, setUser } = useAuth();
  console.log(user);

  const handleUserUpdate = async (data) => {
    try {
      if (data.photoUrl && data.photoUrl.length > 0) {
        const profileImg = data.photoUrl[0];
        const formData = new FormData();
        formData.append("image", profileImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;

        const res = await axios.post(image_API_URL, formData);
        const photoURL = res.data.data.url;
        console.log("profile updated with name photo");
        const userInfo = {
          displayName: data.name,
          photoURL: photoURL,
        };
        updateUserProfile(userInfo)
          .then(() => {
            setUser({ ...user, ...userInfo });
            toast.success("User Profile Updated successfully");
          })
          .catch((err) => console.log(err));
      }
      // Case 2: user only updates name
      else {
        const userInfo = {
          displayName: data.name,
        };
        updateUserProfile(userInfo)
          .then(() => {
            setUser({ ...user, ...userInfo });
            toast.success("User Profile Updated successfully");
          })
          .catch((err) => console.log(err));
      }

      setIsOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-100 px-3 py-1 rounded-md text-red-500 cursor-pointer"
              >
                X
              </button>
            </div>
            <DialogTitle
              as="h3"
              className="text-lg font-medium text-center leading-6 text-gray-900"
            >
              Update User Info
            </DialogTitle>
            <div className="mt-2 w-full">
              <form onSubmit={handleSubmit(handleUserUpdate)}>
                <div className="grid grid-cols-1 gap-10">
                  <div className="space-y-6">
                    {/* Name */}
                    <div className="space-y-1 text-sm">
                      <label htmlFor="name" className="block text-gray-600">
                        Name
                      </label>
                      <input
                        className="w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-amber-950-500 rounded-md bg-white"
                        name="Name"
                        id="name"
                        type="text"
                        defaultValue={user.displayName}
                        placeholder="User Name"
                        {...register("name", { required: true })}
                      />
                    </div>
                    <label htmlFor="name" className="mb-2 block text-gray-600">
                      User Picture
                    </label>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      className="file-input w-full"
                      {...register("photoUrl")}
                    />
                    <label htmlFor="name" className="mb-2 block text-gray-600">
                      User Address
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-amber-950-500 rounded-md bg-white"
                      name="Your Name"
                      id="name"
                      type="text"
                      placeholder="Your Address"
                      required
                    />
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
                    >
                      Update User Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateUserProfile;
