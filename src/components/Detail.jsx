
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const courseId = location.state?.course.courseId;

  const API = "http://localhost:8080/api";

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourseById = async () => {
      try {
        const res = await axios.get(`${API}/v1/courses/${courseId}`);
        setCourse(res.data);
      } catch (err) {
        setError("Failed to fetch course details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourseById();
    } else {
      setError("No course ID provided.");
      setLoading(false);
    }
  }, [courseId]);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (error || !course) {
    return (
      <div className="p-6 text-center text-red-600">
        <p>{error || "No course data found."}</p>
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
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg border rounded-lg">
      <h2 className="text-3xl font-bold text-[#002B5B] mb-4">{course.title}</h2>

      <div className="text-gray-700 space-y-2">
        <p>
          <span className="font-semibold">Course ID:</span> {course.courseId}
        </p>
        <p>
          <span className="font-semibold">Description:</span> {course.description}
        </p>
        <p>
          <span className="font-semibold">Prerequisites:</span>{" "}
          {course.prerequisites?.length
            ? course.prerequisites.join(", ")
            : "None"}
        </p>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-5 py-2 bg-[#002B5B] text-white rounded hover:bg-[#003b7a] transition"
      >
        Back
      </button>
    </div>
  );
};

export default Detail;
