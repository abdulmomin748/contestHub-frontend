import {
  Calendar,
  Users,
  DollarSign,
  Trophy,
  Clock,
  CheckCircle,
  X,
  Award,
  Send,
} from "lucide-react";
import useAxios from "../../hooks/useAxios";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router";
import { startDeadlineCountdown } from "../../utilities/startDeadlineCountdown";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQueryClient } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import BecomeSellerModal from "../../components/Modal/BecomeSellerModal";
import SubmitTaskModal from "../../components/Modal/SubmitTaskModal";
const ContestCard = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });
  const { data: contestItem, isLoading } = useQuery({
    queryKey: ["contest", id],
    queryFn: async () => {
      const res = await axiosInstance(`/contest/${id}`);
      return res.data;
    },
  });
  const {
    data: isRegistered,
    isCheckingRegistered,
    refetch,
  } = useQuery({
    queryKey: ["isRegistered", id, user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contest-is-registered?contestId=${id}&email=${user.email}`
      );
      return res.data.registered;
    },
  });
  const handlePaymentRegister = async () => {
    const paymentRegisterInfo = {
      contestId: contestItem._id,
      registrationFee: contestItem.registrationFee,
      userEmail: contestItem?.userEmail,
      contestName: contestItem.contestName,
      participantsCount: contestItem.participantsCount,
    };
    const res = await axiosSecure.post(
      "/contest/payment-register",
      paymentRegisterInfo
    );
    console.log(res.data.url, paymentRegisterInfo);
    window.location.assign(res.data.url);
    refetch();
  };

  const handleRegister = async () => {
    if (Number(contestItem.registrationFee) === 0) {
      const res = await axiosSecure.post("/contest/free-register", {
        contestId: contestItem._id,
        contestName: contestItem.contestName,
        userEmail: contestItem?.userEmail,
      });
      refetch();
      console.log(res.data);
    } else {
      handlePaymentRegister();
    }
  };

  const queryClient = useQueryClient();
  useEffect(() => {
    if (!sessionId) return;

    axiosSecure
      .patch(`/payment-success?session_id=${sessionId}`)
      .then((res) => {
        if (res.data.success) {
          queryClient.invalidateQueries(["contest", id]);
        }
      });
  }, [sessionId, id]);

  console.log(isRegistered);

  if (isLoading) {
    return <p>loading.............</p>;
  }

  const isExpired = time.isOver;

  const {
    bannerImage,
    category,
    contestId,
    contestName,
    contestStatus,
    deadline,
    description,
    participantsCount,
    prizeMoney,
    taskDetails,
    winner,
    _id,
    registrationFee,
  } = contestItem;

  return (
    <div className=" bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Contest Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Banner Image */}
          <div className="relative h-80 overflow-hidden">
            <img
              src={bannerImage}
              alt={contestName}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            {/* Contest Name Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="inline-block bg-purple-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                {category}
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
                {contestName}
              </h1>
              <p className="text-purple-200">Organized by creatorName</p>
            </div>
          </div>

          {/* Contest Info */}
          <div className="p-8">
            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 text-center">
                <Trophy className="text-yellow-600 mx-auto mb-2" size={28} />
                <div className="text-2xl font-bold text-gray-800">
                  ${prizeMoney}
                </div>
                <div className="text-sm text-gray-600">Prize Money</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center">
                <DollarSign
                  className="text-purple-600 mx-auto mb-2"
                  size={28}
                />
                <div className="text-2xl font-bold text-gray-800">
                  {contestItem?.registrationFee > 0 ? registrationFee : "Free"}
                </div>
                <div className="text-sm text-gray-600">Entry Fee</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center">
                <Users className="text-blue-600 mx-auto mb-2" size={28} />
                <div className="text-2xl font-bold text-gray-800">
                  {participantsCount}
                </div>
                <div className="text-sm text-gray-600">Participants</div>
              </div>

              {/* <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center">
                d h m
                <Calendar className="text-green-600 mx-auto mb-2" size={28} />
                <div className="text-2xl font-bold text-gray-800">1111111</div>
                <div className="text-sm text-gray-600">Days Left</div>
              </div> */}
            </div>

            {/* Countdown Timer */}
            {!time.isOver ? (
              <>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 mb-8">
                  <div className="flex items-center justify-center gap-2 text-white mb-4">
                    <Clock size={24} />
                    <span className="text-xl font-bold">
                      Live Deadline Countdown
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-black">
                        {time.days}
                      </div>
                      <div className="text-black text-sm">Days</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-black">
                        {time.hours}
                      </div>
                      <div className="text-black text-sm">Hours</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-black">
                        {time.minutes}
                      </div>
                      <div className="text-black text-sm">Minutes</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-black">
                        {time.seconds}
                      </div>
                      <div className="text-black text-sm">Seconds</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-red-100 border-2 border-red-300 rounded-2xl p-6 mb-8 text-center">
                  <div className="text-3xl font-bold text-red-700 mb-2">
                    Contest Ended
                  </div>
                  <p className="text-red-600">
                    This contest is now closed for submissions
                  </p>
                </div>
              </>
            )}

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📝 Full Contest Description
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {description}
              </p>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Task Details
                </h3>
                <pre className="text-gray-700 whitespace-pre-wrap font-sans">
                  {taskDetails}
                </pre>
              </div>
            </div>

            {/* Winner Section (Only shows after contest ends and winner is declared) */}
            <div className="hidden bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-yellow-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-800">
                  🏆 Contest Winner
                </h2>
              </div>
              <div className="flex items-center gap-6">
                <img
                  src={"contest.photo"}
                  alt={"contest.name"}
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {"contest.name"}
                  </h3>
                  <p className="text-gray-600 mb-2">{"contest.title"}</p>
                  <div className="flex items-center gap-2 text-yellow-600 font-bold text-xl">
                    <Trophy size={24} />
                    <span>Won ${"contest.prizeAmount"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <>
                <button
                  onClick={handleRegister}
                  disabled={isExpired || isRegistered || isCheckingRegistered}
                  className={`flex-1 py-4 rounded-xl font-bold text-lg transition
                ${
                  isExpired || isRegistered
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105"
                }`}
                >
                  {isExpired
                    ? "Contest Ended"
                    : isRegistered
                    ? "Already Registered"
                    : Number(contestItem?.registrationFee) === 0
                    ? "Register Free"
                    : "Pay & Register"}
                </button>

                <>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send size={24} />
                    Submit Task
                  </button>
                  <SubmitTaskModal  setIsOpen={setIsOpen} isOpen={isOpen}/>
                  
                </>
              </>
            </div>

            {/* Info Box */}

            {isRegistered && (
              <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                <p className="text-blue-800 text-center">
                  ✅ You're registered! Click "Submit Task" to provide your
                  submission link and complete your entry.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
