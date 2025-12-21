import React from "react";
import { ImCross } from "react-icons/im";
import { GiConfirmed } from "react-icons/gi";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ManageContestsRow = ({ constests }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { mutate: updateStatus } = useMutation({
    mutationFn: async ({ id, updateInfo }) => {
      const { data } = await axiosSecure.patch(
        `/contestStatus/${id}/role`,
        updateInfo
      );
      return data;
    },
    onSuccess: (data, variables) => {
      if (data.modifiedCount > 0) {
        queryClient.invalidateQueries({ queryKey: ["constests"] });
        toast.success(
          `Contest Status is set to ${variables.updateInfo.status}`
        );
      }
    },
    onError: (err) => {
      toast.error("Failed to update role.");
      console.error(err);
    },
  });
  const { mutate: deleteContest } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/contest/${id}`);
      return res.data;
    },
    onSuccess: (data, variables) => {
      if (data.deletedCount ) {
        queryClient.invalidateQueries({ queryKey: ["constests"] });
        toast.success(
          `Contest Status is ${variables.updateInfo.status} Deleted`
        );
      }
    },
  });
  const handleConConfirm = (contest) => {
    updateStatus({ id: contest._id, updateInfo: { status: "approved" } });
  };

  const handleConReject = (contest) => {
    updateStatus({ id: contest._id, updateInfo: { status: "rejected" } });
  };

  const handleConDelete = (id) => {
    Swal.fire({
      title: "Are you sure ?",
      text: `Contest will be delete permanently`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, i agree to delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteContest(id);
      }
    });
  };
  return (
    <>
      {constests?.map((conItem, i) => (
        <tr className="hover:bg-base-300">
          <th className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
            {conItem.creatorName}
          </th>
          <td className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
            {conItem.contestName}
          </td>
          <td className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
            <span
              className={
                conItem.status === "approved"
                  ? "text-green-800"
                  : conItem.status === "rejected"
                  ? "text-red-500"
                  : conItem.status === "pending"
                  ? "text-yellow-500"
                  : ""
              }
            >
              {conItem.status}
            </span>
          </td>
          <td className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
            <button
              onClick={() => handleConConfirm(conItem)}
              className="btn btn-square"
            >
              <GiConfirmed />
            </button>
            <button
              onClick={() => handleConReject(conItem)}
              className="btn btn-square"
            >
              <MdOutlineCancel />
            </button>
            <button
              onClick={() => handleConDelete(conItem._id)}
              className="btn btn-square"
            >
              <MdDeleteForever />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ManageContestsRow;
