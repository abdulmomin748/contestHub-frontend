import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import MenuItem from "./MenuItem";
import { useState } from "react";
import BecomeSellerModal from "../../../Modal/BecomeSellerModal";
const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="Participated Contest"
        address="my-participated-cont"
      />
      <MenuItem
        icon={BsFingerprint}
        label="Winning Contest"
        address="my-Winning-cont"
      />
      {/* <div
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py- -gray-300   hover:text-gray-700 cursor-pointer"
      >
        <GrUserAdmin className="w-5 h-5" />

        <span className="mx-4 font-medium">Become A Seller</span>
      </div>

      <BecomeSellerModal closeModal={closeModal} isOpen={isOpen} /> */}
    </>
  );
};

export default UserMenu;
