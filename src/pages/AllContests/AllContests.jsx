import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";

const AllContests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [activeTab, setActiveTab] = useState("All");

  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["all-contests"],
    queryFn: async () => {
      const res = await axiosSecure(
        `/all-contests?status=approved&status=completed`
      );
      return res.data;
    },
  });

  // 1. Extract unique categories from your MongoDB 'category' field
  const categories = useMemo(() => {
    const unique = [...new Set(contests.map((item) => item.category))];
    return ["All", ...unique];
  }, [contests]);

  // 2. Filter contests based on the selected category
  const filteredContests =
    activeTab === "All"
      ? contests
      : contests.filter((contest) => contest.category === activeTab);

  if (isLoading)
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  console.log(categories, filteredContests);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Explore Contests</h2>

      {/* Dynamic Tabs based on your MongoDB Categories */}
      <div className="tabs tabs-boxed justify-center mb-10 bg-transparent gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`tab tab-lg transition-all ${
              activeTab === category
                ? "tab-active !bg-primary !text-white"
                : "bg-base-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtered Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredContests.length > 0 ? (
          filteredContests.map((contest) => (
            <div
              key={contest._id}
              className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-shadow"
            >
              <figure className="px-4 pt-4">
                <img
                  src={contest.contestImage}
                  alt={contest.contestName}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <h2 className="card-title text-xl">{contest.contestName}</h2>
                  <div className="badge badge-outline text-xs">
                    {contest.category}
                  </div>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {contest.description}
                </p>

                <div className="divider my-1"></div>

                <div className="flex justify-between items-center mt-2">
                  <div>
                    <p className="text-xs uppercase text-gray-400">
                      Prize Pool
                    </p>
                    <p className="font-bold text-success">
                      ${contest.prizeMoney}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase text-gray-400">
                      Participants
                    </p>
                    <p className="font-semibold">{contest.participantsCount}</p>
                  </div>
                </div>

                <div className="card-actions mt-4">
                  <Link
                    className="btn btn-primary btn-block btn-sm"
                    to={`/contest/${contest._id}`}
                  >
                    Show Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-xl text-gray-400">
              No contests found for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllContests;
