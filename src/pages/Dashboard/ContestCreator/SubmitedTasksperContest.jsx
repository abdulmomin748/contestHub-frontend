import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const SubmitedTasksperContest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { id } = useParams();
  const { data: submissionData = [], isLoading } = useQuery({
    queryKey: ["submissionTask", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/task-submission/${id}`);
      return res.data;
    },
  });
  if(isLoading){
    return <p>Loading............</p>
  }
  console.log(submissionData);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>participant Name</th>
              <th>Email</th>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissionData.map((subDataItem, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{subDataItem?.participantName}</td>
                <td>{subDataItem.participantEmail}</td>
                <td>{subDataItem?.task}</td>
                <td>
                  <button className="btn btn-primary  ml-2">Declare Winner</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmitedTasksperContest;
