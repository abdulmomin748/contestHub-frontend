import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";

const MyCreatedContests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: myCreatedContest,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Contest", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(
        `/user-created-contest?email=${user.email}`
      );
      return res.data;
    },
  });
  if (isLoading) {
    return <p>loading..........</p>;
  }
  const handleCreatedConDelete = (id) => {
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
        axiosSecure
          .delete(`/contest/${id}`)
          .then((res) => {
            console.log(res.data);
            refetch();
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Contest Name</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myCreatedContest.map((createContestItem, i) => (
              <tr>
                <th className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  {i + 1}
                </th>
                <td className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  {createContestItem.contestName}
                </td>
                <td className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  {createContestItem.deadline}
                </td>
                <td className="font-medium italic text-xl">
                  <span
                    className={
                      createContestItem.status === "approved"
                        ? "text-green-800"
                        : createContestItem.status === "rejected"
                        ? "text-red-500"
                        : createContestItem.status === "pending"
                        ? "text-yellow-500"
                        : ""
                    }
                  >
                    {createContestItem.status}
                  </span>
                </td>
                <td>
                  {/* only if still pending -->Edit & delete possible   || submission possible after confirmed*/}
                  <Link
                    to={`/dashboard/update-contests/${createContestItem._id}`}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>

                  {
                    <button
                      title="Delete"
                      disabled={
                        createContestItem.status !== "pending" &&
                        createContestItem.status !== "rejected"
                      }
                      onClick={() =>
                        handleCreatedConDelete(createContestItem._id)
                      }
                      className="btn btn-square ml-2"
                    >
                      <MdDeleteForever />
                    </button>
                  }

                  <Link
                    to={`/dashboard/submiteted-tasks/${createContestItem._id}`}
                    className="btn btn-primary ml-2"
                  >
                    Submission
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCreatedContests;
