import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { GiPodiumWinner } from "react-icons/gi";
import Swal from "sweetalert2";

const SubmitedTasksperContest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const {
    data: submissionData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["submissionTask", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/task-submission/${id}`);
      return res.data;
    },
  });

  const handleDeclareWinner = (subDataItem) => {
    // Extract prize from the joined contest details
    const prize = subDataItem.contestDetails?.prizeMoney;

    Swal.fire({
      title: "Declare Winner?",
      text: `${subDataItem.participantName} will win $${prize}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Pay & Declare!",
    }).then((result) => {
      if (result.isConfirmed) {
        const winnerInf = {
          participantName: subDataItem.participantName,
          participantImg: subDataItem.participantImg,
          participantEmail: subDataItem.participantEmail,
          contestId: subDataItem.contestId,
          contestName: subDataItem.contestName,
          prizeMoney: prize,
          winQuantity: 1,
        };

        axiosSecure
          .patch(`/task-submission/winner/${subDataItem._id}`, winnerInf)
          .then((res) => {
            Swal.fire(
              "Success!",
              `Winner declared with a prize of $${prize}`,
              "success"
            );
            refetch();
          })
          .catch((err) => console.log(err));
      }
    });
  };

  if (isLoading) {
    return <p className="text-center mt-10">Loading submissions...</p>;
  }

  return (
    <div className="p-10">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Participant Name</th>
              <th>Email</th>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissionData.map((subDataItem, i) => {
              console.log(subDataItem);

              // The Global Lock based on the joined contest status
              const isContestClosed =
                subDataItem.contestDetails?.status === "completed";
              const isThisWinner = subDataItem.status === "winner";

              return (
                <tr key={subDataItem._id}>
                  <th>{i + 1}</th>
                  <td>{subDataItem?.participantName}</td>
                  <td>{subDataItem.participantEmail}</td>
                  <td className="max-w-xs truncate">{subDataItem?.task}</td>
                  <td>
                    {isThisWinner ? (
                      <button className="btn btn-success text-white no-animation cursor-default flex items-center gap-2">
                        <GiPodiumWinner /> Winner
                      </button>
                    ) : (
                      <button
                        disabled={isContestClosed}
                        onClick={() => handleDeclareWinner(subDataItem)}
                        className={`btn flex items-center gap-2 ${
                          isContestClosed
                            ? "btn-disabled bg-gray-200 text-gray-400"
                            : "btn-primary bg-[#5D3FD3] border-none text-white hover:bg-[#4a32a8]"
                        }`}
                      >
                        {isContestClosed ? "Closed" : "Declare Winner"}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmitedTasksperContest;
