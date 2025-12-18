import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
const AddContestForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const handleAddContest = (data) => {
    const deadlineDate = startDate.toISOString();

    const contestInfo = {
      category: data.category,
      contestName: data.contestName,
      description: data.description,
      prizeMoney: data.prizeMoney,
      registrationFee: data.registrationFee,
      taskDetails: data.taskDetails,
      deadline: deadlineDate,
      userEmail: user.email,
    };
    console.log(contestInfo);
  };
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
                      required
                      {...register("bannerImage", { required: true })}
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
              Save & Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContestForm;
