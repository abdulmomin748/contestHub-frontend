import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../hooks/useAxios";
import { ArrowRight, Calendar, Trophy, Users } from "lucide-react";
import { Link } from "react-router";

const PopularContest = () => {
  const axiosInstance = useAxios();
  const { data: contests = [] } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosInstance(
        "/contests-popular?status=approved&status=completed"
      );
      return res.data;
    },
  });
  console.log(contests);
  return (
    <>
      <div className="text-center py-20">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
          Popular{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Contests
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Join thousands of talented creators who have turned their passion into
          prizes. Your success story could be next!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 ml-5">
        {contests.map((contestItem) => (
          <div className=" bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ">
            {/* Contest Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={contestItem.contestImage}
                alt={contestItem.contestName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Trophy size={14} />
                Popular
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              {/* Contest Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {contestItem.contestName}
              </h3>

              {/* Participants Count */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                  <Calendar size={14} />

                  <span className="font-semibold">
                    Ends: {new Date(contestItem.deadline).toDateString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full mb-5">
                <Users size={16} />
                <span className="text-sm">
                  participantsCount {contestItem?.participantsCount}
                </span>
              </div>
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {contestItem.description.length > 30
                  ? contestItem.description.slice(0, 30) + "..."
                  : contestItem.description}
              </p>

              {/* Deadline */}
              <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                <span>{contestItem.contestStatus}</span>
              </div>
              <div className="">
                <Link
                  className="btn btn-primary w-full"
                  to={`/contest/${contestItem._id}`}
                >
                  Show Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center py-20">
        <Link
          to={`/all-contests`}
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
        >
          Show All Contests
        </Link>
      </div>
    </>
  );
};

export default PopularContest;
