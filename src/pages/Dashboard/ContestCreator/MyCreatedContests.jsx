import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const MyCreatedContests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myCreatedContest, isLoading } = useQuery({
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
  console.log(myCreatedContest);

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
                <th>{i + 1}</th>
                <td>{createContestItem.contestName}</td>
                <td>{createContestItem.deadline}</td>
                <td>{createContestItem?.status}</td>
                <td>
                  {/* only if still pending -->Edit & delete possible   || submission possible after confirmed*/}
                  <Link
                    to={`/dashboard/update-contests/${createContestItem._id}`}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>

                  <button className="btn btn-warning  ml-2">Delete</button>

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
