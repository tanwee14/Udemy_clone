import React from 'react'
import { useState } from 'react'
import Courses from './Courses';
import { useEffect } from 'react'

function ListOfCourses() {
 let arr = [
    {
      id: "1",
      title: "React",
      price: 5000,
      likes: 400,
      rating: 5,
      imageUrl:
        "https://framerusercontent.com/images/N0xefN2fE6CCF4G2YhAg5exTHX8.png",
      description:
        "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    },
    {
      id: "2",
      title: "Redux",
      price: 4000,
      likes: 600,
      rating: 5,
      imageUrl:
        "https://negativeepsilon.com/media/attachments/blobs/2023/01/09/PNbZQxCiPVkNWzDNPDx24j_redux_rm05scp.png_riwC4kc5pLH7k1e5ReNajv_2FOQ.webp",
      description:
        "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
    },
    {
      id: "3",
      title: "Node",
      price: 6000,
      likes: 900,
      rating: 4,
      imageUrl:
        "https://blog.logrocket.com/wp-content/uploads/2022/10/Building-simple-login-form-node-js.png",
      description:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
    },
    {
      id: "4",
      title: "Angular",
      price: 5000,
      likes: 200,
      rating: 3,
      imageUrl:
        "https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1.png",
      description:
        "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.",
    },
    {
      id: "5",
      title: "Flutter",
      price: 7000,
      likes: 700,
      rating: 4,
      imageUrl:
        "https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg",
      description:
        "Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.",
    },
  ];    
  return (
    <div>
        <div className="row">
            {arr.map(course => (
                <Courses course={course} key={course.id} />
            ))}
        </div>
    </div>
  )
}

export default ListOfCourses