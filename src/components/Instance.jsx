import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Instance = () => {
  const [selectedInstance, setSelectedInstance] = useState(null);
  const instances = useSelector((store) => store.instances.list);
  console.log("instances are ", instances)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#002B5B] mb-6">
        Select an Instance
      </h1>

      {/* Instance Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.keys(instances).map((instance) => (
          <button
            key={instance}
            onClick={() => setSelectedInstance(instance)}
            className={`px-4 py-2 rounded-md border text-white ${
              selectedInstance === instance
                ? "bg-[#002B5B]"
                : "bg-[#3f6ea7] hover:bg-[#002B5B]"
            } transition`}
          >
            {instance}
          </button>
        ))}
      </div>

      {/* Courses for Selected Instance */}
      {selectedInstance && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Courses for {selectedInstance}
          </h2>

          <div className="grid gap-6">
            {instances[selectedInstance].map((course, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg shadow-md p-5 bg-white"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Course ID:</span>{" "}
                  {course.courseId}
                </p>
                <p className="text-gray-700 mb-1">{course.description}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Prerequisites:</span>{" "}
                  {course.prerequisites}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Instance;
