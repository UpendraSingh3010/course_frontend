
import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:8080/api";

const Instance = () => {
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!year || !semester) {
      setError("Both year and semester are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data } = await axios.get(`${API}/v1/instances/${year}/${semester}`);
      setCourses(data.instances || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load courses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDetails = async (id) => {
    try {
      const { data } = await axios.get(`${API}/v1/instances/${year}/${semester}/${id}`);
      alert(
        `Course Details:\n\nTitle: ${data.title}\nDescription: ${data.description}\nPrerequisites: ${data.prerequisites?.join(", ") || "None"}`
      );
    } catch (err) {
      console.error(err);
      alert("Failed to fetch course details.");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this course?");
    if (!confirmed) return;

    try {
      await axios.delete(`${API}/v1/instances/${year}/${semester}/${id}`);
      setCourses((prev) => prev.filter((c) => c.id !== id));
      alert("Course deleted successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to delete course.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-[#002B5B] mb-4">
        Search Course Instances
      </h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-wrap gap-4 mb-6 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g., 2025"
            required
            className="border p-2 rounded-md w-32"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
          <input
            type="number"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            placeholder="e.g., 1"
            required
            className="border p-2 rounded-md w-32"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#002B5B] text-white px-4 py-2 rounded-md hover:bg-[#003b7a] transition disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Feedback */}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      {/* Course Results */}
      {!loading && courses.length > 0 ? (
        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex justify-between items-center border border-gray-300 rounded-md p-4 bg-white shadow-sm"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                <p className="text-sm text-gray-600">Course ID: {course.courseId}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleDetails(course.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Details
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading &&
        !error && (
          <p className="text-gray-500 italic">No courses found for the given year and semester.</p>
        )
      )}
    </div>
  );
};

export default Instance;
