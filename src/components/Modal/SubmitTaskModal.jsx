import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const SubmitTaskModal = ({ setIsOpen, isOpen }) => {
  const hanldeSubmit = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 max-w-xl flex items-center justify-center"
      >
        <div className="fixed inset-0  p-4">
          <DialogPanel className=" space-y-4 border w-[500px]  bg-white p-6">
            <DialogTitle className="font-bold">Submit Task</DialogTitle>
            <Description>
              <input type="text" required placeholder="Type here" className="input w-full" />
            </Description>
            <div className="flex gap-4">
              <button className="btn btn-primary" onClick={hanldeSubmit}>
                Submit
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default SubmitTaskModal;
