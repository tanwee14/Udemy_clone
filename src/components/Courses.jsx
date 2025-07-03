import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import CourseDetails from "./CourseDetails";


function Courses ({course}) {
  const[likes,setLikes] = useState(100);

    let ratings=[]
    for(let i=0;i<course.rating;i++){
      ratings.push(
        <i
          className="fa-solid fa-star"
          key={i}
          style={{ color: "orange" }}
        ></i>,
      )
    }
    return(
        <div className="col-md-3 col-sm-2 my-1">   
        <div class="card" style={{width: "18rem"}}>
        <Link to="courseDetails">
        <img src={course.imageUrl} class="card-img-top" alt={course.imageUrl} height="175px"/>
        </Link>
        <div class="card-body">
          <h5 class="card-title">Title : {course.title}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <p class="card-text">Rating : {ratings}</p>
          <p class="card-text">Price : {course.price}</p>
          <button class="btn btn-primary" onClick={()=>setLikes(likes+1)}>Likes : {likes}
            <i className="fa-solid fa-thumbs-up"></i></button>
        </div>
      </div>
      </div>
    );
}

export default Courses;