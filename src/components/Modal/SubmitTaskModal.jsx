import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useForm } from "react-hook-form";

const SubmitTaskModal = ({ setIsOpen, isOpen, handleSubmission }) => {
  const { register, handleSubmit } = useForm();
  const handleSubmitModalInf = (data) => {
    handleSubmission(data);
    setIsOpen(false);
  };
  return (
    <div>
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
                <form onSubmit={handleSubmit(handleSubmitModalInf)}>
                  <div className="grid grid-cols-1 gap-10">
                    <div className="space-y-6">
                      {/* Name */}
                      <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-gray-600">
                          User Name
                        </label>
                        <input
                          className="w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-amber-950-500 rounded-md bg-white"
                          name="Your Name"
                          id="name"
                          type="url"
                          placeholder="Plant Name"
                          {...register("taskName", { required: true })}
                        />
                      </div>
                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md btn btn-primary "
                      >
                        Update Plant
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SubmitTaskModal;
