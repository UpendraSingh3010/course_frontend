
import React, { useRef, useState } from 'react';
import axios from 'axios';

const AddCourse = ({ onCourseAdded }) => {
  const API = 'http://localhost:8080/api/v1';

  const titleRef = useRef(null);
  const courseIdRef = useRef(null);
  const descriptionRef = useRef(null);
  const prerequisitesRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  const rawInput = prerequisitesRef.current.value.trim().toLowerCase();
  const prerequisites = rawInput && rawInput !== "none"
    ? rawInput
        .split(",")
        .map((id) => id.trim().toUpperCase())
        .filter((id) => id && id !== "NONE")
    : [];

  const course = {
    title: titleRef.current.value.trim(),
    courseId: courseIdRef.current.value.trim(),
    description: descriptionRef.current.value.trim(),
    prerequisites: prerequisites
  };

  try {
    await axios.post(`${API}/courses`, course);
    alert("Course added successfully!");

    titleRef.current.value = "";
    courseIdRef.current.value = "";
    descriptionRef.current.value = "";
    prerequisitesRef.current.value = "";

    // Optional: refresh course list
    // fetchCourses();
  } catch (err) {
    console.error("Error while adding course:", err.response?.data || err.message);
    alert(
      err.response?.data?.message ||
      "Error creating course. Please check your inputs."
    );
  }
};



  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-md border border-gray-200">
      <h2 className="text-2xl font-bold text-[#002B5B] mb-6">Add New Course</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Title
          </label>
          <input
            type="text"
            name="title"
            ref={titleRef}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
          />
        </div>

        {/* Course ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course ID
          </label>
          <input
            type="text"
            name="courseId"
            ref={courseIdRef}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            ref={descriptionRef}
            rows="3"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
          />
        </div>

        {/* Prerequisites */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prerequisites (comma-separated Course IDs)
          </label>
          <input
            type="text"
            name="prerequisites"
            ref={prerequisitesRef}
            placeholder="e.g., CS101, CS102"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? 'bg-gray-400' : 'bg-[#002B5B] hover:bg-[#003b7a]'
            } text-white px-6 py-2 rounded-md transition`}
          >
            {loading ? 'Adding...' : 'Add Course'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
