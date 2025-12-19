import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
const AddContestForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { id } = useParams();
  const isEditMode = !!id;
  console.log(isEditMode, id);
  const { data: contestData, isLoading } = useQuery({
    queryKey: ["contest", id],
    enabled: isEditMode,
    queryFn: async () => {
      const res = await axiosSecure.get(`/contest/${id}`);
      return res.data;
    },
  });
  useEffect(() => {
    if (isEditMode && contestData) {
      reset({
        contestName: contestData.contestName,
        category: contestData.category,
        description: contestData.description,
        taskDetails: contestData.taskDetails,
        prizeMoney: contestData.prizeMoney,
        registrationFee: contestData.registrationFee,
        deadline: contestData.deadline?.slice(0, 10), 
        contestImage: contestData.contestImage,
      });
    }
  }, [isEditMode, contestData, reset]);
  const handleAddContest = async (data) => {
    let photoURL = contestData.contestImage; 

    const deadlineDate = startDate.toISOString();

    if (data.bannerImage && data.bannerImage.length > 0) {
      const formData = new FormData();
      const contestImage = data.bannerImage[0];
      formData.append("image", contestImage);
      const image_API_URL = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host
      }`;
      const res = await axios.post(image_API_URL, formData);
      photoURL = res.data.data.url;
    }

    const contestInfo = {
      contestImage: photoURL,
      category: data.category,
      contestName: data.contestName,
      description: data.description,
      prizeMoney: data.prizeMoney,
      registrationFee: data.registrationFee,
      taskDetails: data.taskDetails,
      deadline: deadlineDate,
      userEmail: user.email,
      creatorName: user.displayName,
    };
    if (isEditMode) {
      axiosSecure
        .patch(`/contest/${id}`, contestInfo)
        .then((res) => {
          if (res.data.acknowledged) {
            toast.success(`${data.contestName} Contest Updated!`);
            reset();
          }
        })
        .catch((err) => console.log(err));
    } else {
      axiosSecure
        .post("/contest", contestInfo)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success(`${data.contestName} Contest Addded!`);
            reset();
          }
        })
        .catch((err) => console.log(err));
      console.log(contestInfo);
    }
  };
  console.log(contestData);

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form className="w-full p-5" onSubmit={handleSubmit(handleAddContest)}>
        <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-5">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="name"
                id="name"
                type="text"
                placeholder="Contest Name"
                required
                {...register("contestName", { required: true })}
              />
            </div>
            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600 ">
                Contest Type
              </label>
              <select
                required
                className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="category"
                {...register("category", { required: true })}
              >
                <option value="Writing">Writing</option>
                <option value="Content">Content</option>
                <option value="Photography">Photography</option>
                <option value="Design">Design</option>
                <option value="Video">Video</option>
              </select>
            </div>
            {/* Description */}
            <div className="space-y-1 text-sm ">
              <label htmlFor="description" className="block text-gray-600">
                Deadline
              </label>
              <DatePicker
                className="w-full px-4 py-3 border-2 border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                // {...register("deadline", { required: true })}
              />
              <label htmlFor="category" className="block text-gray-600 mt-5">
                Task Instruction
              </label>
              <textarea
                id="description"
                placeholder="Write plant description here..."
                className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 "
                name="description"
                {...register("taskDetails", { required: true })}
              ></textarea>
            </div>
          </div>
          <div className="space-y-6 flex flex-col">
            {/* Price & Quantity */}
            <div className="flex gap-2">
              {/* Price */}
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="price" className="block text-gray-600 ">
                  Fee
                </label>
                <input
                  className="w-full px-4 py-3  text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Registration Fee"
                  required
                  {...register("registrationFee", { required: true })}
                />
              </div>

              {/* Description */}
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>

                <textarea
                  id="description"
                  placeholder="Write plant description here..."
                  className="block w-full rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 "
                  name="description"
                  {...register("description", { required: true })}
                ></textarea>
              </div>
            </div>
            {/* Image */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="price" className="block text-gray-600 ">
                Prize Money
              </label>
              <input
                className="w-full px-4 py-3  text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
                name="price"
                id="price"
                type="number"
                placeholder="Prize Money"
                required
                {...register("prizeMoney", { required: true })}
              />
            </div>
            <div className=" p-4  w-full  m-auto rounded-lg grow">
              <label htmlFor="description" className="block text-gray-600 mb-3">
                Choose Image
              </label>
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      {...register("bannerImage", { required: !isEditMode })}
                    />
                    <div className="bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
                      Upload
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 "
            >
              {isEditMode ? "Update Contest" : "Add Contest"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContestForm;
