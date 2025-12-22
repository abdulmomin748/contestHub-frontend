import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyWinningContest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: winnerContests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["winner", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/winnerContests?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(winnerContests);

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
                      #
                    </th>
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
                      Prize Money
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {winnerContests.map((winnerConItm, i) => (
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900">{i + 1}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="shrink-0">
                            <div className="block relative">
                              {winnerConItm.contestName}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900">
                          {winnerConItm?.prizeMoney}$
                        </p>
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

export default MyWinningContest;
