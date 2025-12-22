import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { data } from "react-router";

const MyParticipatedContest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: registeredContest, isLoading } = useQuery({
    queryKey: ["Registered", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/registered?email=${user.email}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <p>loading..........</p>;
  }
  console.log(registeredContest);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold "
                    >
                      Contest Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold "
                    >
                      Register Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold "
                    >
                      Deadline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {registeredContest.map((rContestItem) => (
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="shrink-0">
                            <div className="block relative">
                              {rContestItem.contestName}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900">{rContestItem.paymentStatus}_Registered</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900">{rContestItem.deadline.toLocaleString()}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyParticipatedContest;
