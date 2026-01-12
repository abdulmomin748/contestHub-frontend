import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";

const ITEMS_PER_PAGE = 3;

const AllContests = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  // =====================
  // FETCH DATA
  // =====================
  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["all-contests"],
    queryFn: async () => {
      const res = await axiosSecure("/all-contests");
      return res.data;
    },
  });

  // =====================
  // DYNAMIC CATEGORIES
  // =====================
  const categories = useMemo(() => {
    return ["All", ...new Set(contests.map((item) => item.category))];
  }, [contests]);

  // =====================
  // FILTER + SEARCH + SORT
  // =====================
  const filteredContests = useMemo(() => {
    let data = [...contests];

    // SEARCH
    if (search) {
      data = data.filter((item) =>
        item.contestName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // TAB CATEGORY
    if (activeTab !== "All") {
      data = data.filter((item) => item.category === activeTab);
    }

    // DROPDOWN CATEGORY
    if (category) {
      data = data.filter(
        (item) => item.status.toLowerCase() === category.toLowerCase()
      );
    }

    // SORT
    if (sort === "newest") {
      data.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    }

    if (sort === "oldest") {
      data.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    }

    return data;
  }, [contests, search, activeTab, category, sort]);

  // =====================
  // PAGINATION
  // =====================
  const totalPages = Math.ceil(filteredContests.length / ITEMS_PER_PAGE);

  const paginatedData = filteredContests.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Explore Contests</h2>

      {/* ================= SEARCH & SORT ================= */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search contest..."
          className="w-full md:w-2/3 border rounded-md px-4 py-2"
        />

        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          className="w-full md:w-1/3 border rounded-md px-4 py-2"
        >
          <option value="">Sort By</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* ================= CATEGORY FILTER ================= */}
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setPage(1);
        }}
        className="w-full md:w-1/2 border rounded-md px-4 py-2 mb-8"
      >
        <option value="">Status</option>
        <option value="approved">Approved</option>
        <option value="completed">Completed</option>
        <option value="rejected">Rejected</option>
      </select>

      {/* ================= TABS ================= */}
      <div className="tabs tabs-boxed justify-center mb-10 bg-transparent gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveTab(cat);
              setPage(1);
            }}
            className={`tab tab-lg ${
              activeTab === cat
                ? "tab-active !bg-primary !text-white"
                : "bg-base-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedData.length > 0 ? (
          paginatedData.map((contest) => (
            <div
              key={contest._id}
              className="card bg-base-100 shadow-xl border"
            >
              <figure className="px-4 pt-4">
                <img
                  src={contest.contestImage}
                  alt={contest.contestName}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <div className="flex justify-between">
                  <h2 className="card-title text-lg">{contest.contestName}</h2>
                  <span className="badge badge-outline text-xs">
                    {contest.category}
                  </span>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2">
                  {contest.description}
                </p>

                <div className="divider"></div>

                <div className="flex justify-between">
                  <p className="font-bold text-success">
                    ${contest.prizeMoney}
                  </p>
                  <p>{contest.participantsCount} joined</p>
                </div>

                <Link
                  to={`/contest/${contest._id}`}
                  className="btn btn-primary btn-sm mt-4"
                >
                  Show Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 py-20">
            No contests found.
          </p>
        )}
      </div>

      {/* ================= PAGINATION ================= */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="btn btn-outline btn-sm"
          >
            Prev
          </button>

          <span className="font-semibold">
            {page} / {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="btn btn-outline btn-sm"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllContests;
