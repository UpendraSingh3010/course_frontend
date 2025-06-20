import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;

  if (!course) {
    return (
      <div className="p-6 text-center text-red-600">
        <p>No course data found.</p>
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
          <span className="font-semibold">Prerequisites:</span> {course.prerequisites || 'None'}
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
