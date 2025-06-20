import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();

  const courses = useSelector((store) => store.courses.list);
  console.log("courses come", courses)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#002B5B] mb-6">
        Available Courses
      </h1>

      <div className="grid gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border border-gray-300 rounded-lg shadow-md p-6 bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {course.title}
            </h2>
            <p className="text-sm text-gray-500 mb-1">
              Course ID: <span className="font-medium">{course.id}</span>
            </p>
            <p className="text-gray-700 mb-2">{course.description}</p>
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-medium">Prerequisites:</span>{" "}
              {course.prerequisites}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/detail", { state: { course } })}
                className="bg-[#002B5B] text-white px-4 py-2 rounded hover:bg-[#003b7a] transition"
              >
                Detail
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Delete
              </button>
              <button
                onClick={() => navigate("/add-instance", { state: { course } })}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Add Instance
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
