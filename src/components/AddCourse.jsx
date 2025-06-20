import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import  { courseActions } from '../store/courseSlice';

const AddCourse = () => {

  const dispatch = useDispatch();

  const titleRef= useRef(null)
  const courseIdRef = useRef(null)
  const descriptionRef=useRef(null)
  const prerequisitesRef=useRef(null)

  

  // const [course, setCourse] = useState({
  //   title: '',
  //   courseId: '',
  //   description: '',
  //   prerequisites: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCourse({ ...course, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const course ={
      title :titleRef.current.value,
      courseId: courseIdRef.current.value,
      description:descriptionRef.current.value,
      prerequisites:prerequisitesRef.current.value,

    }
        dispatch(courseActions.addNewCourse(course))
    

    console.log('Course Added:', course);
    // TODO: Send data to backend or update state
    alert('Course added successfully!');

    titleRef.current.value=''
    courseIdRef.current.value=''
    descriptionRef.current.value=''
    prerequisitesRef.current.value=''


    // setCourse({ title: '', courseId: '', description: '', prerequisites: '' });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-md border border-gray-200">
      <h2 className="text-2xl font-bold text-[#002B5B] mb-6">Add New Course</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
          <input
            type="text"
            name="title"
            // value={course.title}
            // onChange={handleChange}
            ref={titleRef}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
          />
        </div>

        {/* Course ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Course ID</label>
          <input
            type="text"
            name="courseId"
            // value={course.courseId}
            // onChange={handleChange}
            ref={courseIdRef}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            // value={course.description}
            // onChange={handleChange}
            ref={descriptionRef}
            rows="3"
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
          />
        </div>

        {/* Prerequisites */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prerequisites</label>
          <input
            type="text"
            name="prerequisites"
            // value={course.prerequisites}
            // onChange={handleChange}
            ref={prerequisitesRef}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-[#002B5B] text-white px-6 py-2 rounded-md hover:bg-[#003b7a] transition"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;