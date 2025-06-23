import AddCourse from "./components/AddCourse"
import AddInstance from "./components/AddInstance"
import Detail from "./components/Detail"
import Home from "./components/Home"
import Instance from "./components/Instance"
import Navbar from "./components/Navbar"
import { Routes,Route } from "react-router-dom"
function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/detail" element= {<Detail/>}/>
        <Route path="/add-course" element={<div className="p-4">{<AddCourse/>}</div>} />
        <Route path="/add-instance" element= {<AddInstance/>}/>
        <Route path="/instance" element={<Instance/>} />
      </Routes>
 
    </>
  )
}

export default App
