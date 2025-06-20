import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { instancesActions } from "../store/instanceSlice";

const AddInstance = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const course = state?.course;

  const yearRef = useRef(null);
  const semRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInstance = {
      courseId: course?.id || "",
      year: yearRef.current.value,
      semester: semRef.current.value,
      title:course?.title,
      description:course?.description,
      prerequisites:course?.prerequisites
    };
    dispatch(instancesActions.addNewInstance(newInstance));

    console.log("New Instance:", newInstance);
    alert("Instance added successfully!");
    navigate(-1); // go back
  };

  if (!course) {
    return (
      <div className="p-6 text-center text-red-600">
        <p>No course data provided.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-[#002B5B] text-white rounded hover:bg-[#003b7a]"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md border">
      <h2 className="text-2xl font-bold text-[#002B5B] mb-6">
        Add Instance for {course.title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Course ID (read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course ID
          </label>
          <input
            type="text"
            value={course.id}
            readOnly
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Year */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <input
            type="number"
            ref={yearRef}
            placeholder="e.g., 2025"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
          />
        </div>

        {/* Semester */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Semester
          </label>
          <input
            type="text"
            ref={semRef}
            placeholder="e.g., 1st or 2nd"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-[#002B5B] text-white px-6 py-2 rounded-md hover:bg-[#003b7a] transition"
          >
            Add Instance
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInstance;
