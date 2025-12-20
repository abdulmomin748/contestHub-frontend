import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const UpdateUserRoleModal = ({ isOpen, closeModal, user }) => {
  console.log(user);

  const [selectedRole, setSelectedRole] = useState(user?.role || "user");
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (newRole) => {
      const { data } = await axiosSecure.patch(`/users/${user._id}/role`, {
        role: newRole,
      });
      return data;
    },
    onSuccess: (data) => {
      if (data.modifiedCount > 0) {
        toast.success(
          `updated ${user.role} role to ${selectedRole} sucessfully`
        );
        queryClient.invalidateQueries({ queryKey: ["users"] });
      }
    },
    onError: (err) => {
      toast.error("Failed to update role.");
      console.error(err);
    },
  });
  const handleUpdateRole = async () => {
    console.log(selectedRole);

    try {
      await mutateAsync(selectedRole);
    } catch (error) {
      // Errors are handled in the mutation's onError, but you can catch here too
    }
  };
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black"
              >
                Update User Role
              </DialogTitle>
              <form>
                <div>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full my-3 border border-gray-200 rounded-xl px-2 py-3"
                    name="role"
                    id=""
                  >
                    <option value="user">User</option>
                    <option value="creator">Creator</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="flex mt-2 justify-around">
                  <button
                    onClick={handleUpdateRole}
                    type="button"
                    className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default UpdateUserRoleModal;
