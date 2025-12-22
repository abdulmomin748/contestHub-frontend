import { useState } from "react";
import UpdateUserRoleModal from "../../Modal/UpdateUserRoleModal";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
const UserDataRow = ({ usersData }) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      {usersData.map((user) => (
        <tr>
          <td  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
            <p className="text-gray-900 ">{user.email}</p>
          </td>
          <td  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
            <p className="text-gray-900 ">{user.displayName}</p>
          </td>
          <td  className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
            <p className="text-gray-900 flex items-center font-medium italic">
              {user.role === 'user' && <FaRegUserCircle />}
              {user.role === 'creator' && <IoCreateOutline  className="text-xl"/>}
              {user.role === 'admin' && <MdOutlineAdminPanelSettings className="text-xl" />}
                {user.role}
            </p>
          </td>
          <td className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
            <span
              onClick={() => setIsOpen(true)}
              className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
              ></span>
              <span className="relative">Update Role</span>
            </span>
            {/* Modal */}
            <UpdateUserRoleModal
              isOpen={isOpen}
              closeModal={closeModal}
              user={user}
              // by default is user that's why declared
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserDataRow;
