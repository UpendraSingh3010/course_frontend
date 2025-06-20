import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { courseActions } from '../store/courseSlice';
import { instancesActions } from '../store/instanceSlice';

 const courses = [
    {
      id: "CSE101",
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      prerequisites: "None",
    },
    {
      id: "CSE202",
      title: "Data Structures",
      description: "Covers common data structures and their algorithms.",
      prerequisites: "CSE101",
    },
    {
      id: "CSE303",
      title: "Operating Systems",
      description:
        "Explore OS concepts like processes, memory, and file systems.",
      prerequisites: "CSE202",
    },
  ];

const instances = {
  '2024 1st Sem': [
    {
      title: 'Introduction to Programming',
      courseId: 'CSE101',
      description: 'Basics of programming using Python.',
      prerequisites: 'None',
    },
    {
      title: 'Mathematics I',
      courseId: 'MTH101',
      description: 'Linear algebra and calculus.',
      prerequisites: 'None',
    },
  ],
  '2024 2nd Sem': [
    {
      title: 'Data Structures',
      courseId: 'CSE202',
      description: 'Study of data structures and their operations.',
      prerequisites: 'CSE101',
    },
    {
      title: 'Digital Logic Design',
      courseId: 'ECE205',
      description: 'Logic gates, flip flops, and combinational circuits.',
      prerequisites: 'None',
    },
  ],
};




const FetchCourses = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(courseActions.addInitialCourses(courses))
    console.log("add inital course")

  },[dispatch])
  return null
}

export const FetchInstances =() =>{
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(instancesActions.addInitialInstance(instances))
},[dispatch])
return null
}

export default FetchCourses