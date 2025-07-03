import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Link,Routes,Route,BrowserRouter} from 'react-router-dom';
import CourseDetails from './components/CourseDetails';
import ListOfCourses from './components/ListOfCourses'

function App() {
  const [count, setCount] = useState(0)

    return (
      <>
      <Navbar/>
        <BrowserRouter>
          {/* <Link to="/post">Posts  </Link> */}
          <br/>
          <Link to="/">ListofCourses  </Link>
          <br/>
          <Link to="/courseDetails">Course Details</Link>
          <Routes>
            <Route path="/courseDetails" element={<CourseDetails/>}/>
            <Route path="/" element={<ListOfCourses />} />
            {/* <Route path="/post" element={<Posts />} /> */}
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App
