
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [courses, setCourses]= useState([]);

  const API = "http://localhost:8080/api";

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await axios.get(`${API}/v1/courses`);
    console.log("All courses in home are ", res.data)
    setCourses(res.data);
  };

  const handleDeleteBtn = async (e) =>{
    const courseId = e.currentTarget.dataset.id;
    console.log("Delete the course ",courseId)
    try {
      await axios.delete(`${API}/v1/courses/${courseId}`);
      fetchCourses();
    } catch (err) {
      alert(
        err.response.data.message || "Cannot delete course due to dependency"
      );
    }
  }

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
              <button data-id={course.id} onClick={handleDeleteBtn} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
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
