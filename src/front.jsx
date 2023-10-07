import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './App.css'
const Frontend = () => {

  const [data, setdata] = useState([
    {
      link: "https://www.youtube.com/embed/HcOc7P5BMi4?si=pV05raN8mJNOlg5w",
      heading: "HTML",
      description: "This video is for understanding the HTML very clearly and for entering in the field of Developmemt",
      rating: "⭐⭐⭐⭐⭐"

    },
    {
      link: "https://www.youtube.com/embed/ESnrn1kAD4E?si=FnYO_g2tNAi7lrUa",
      heading: "CSS",
      description: "This video is for understanding the CSS very clearly and for carrying on  the field of Developmemt",
      rating: "⭐⭐⭐⭐"

    },
    {
      link: "https://www.youtube.com/embed/DUiYVJIVNcA?si=WP6KeZmNvQ_JEwjn",
      heading: "Bootstrap",
      description: "This video is for understanding the Bootstrap which helps to design the webpage like css",
      rating: "⭐⭐⭐⭐"

    },
    {
      link: "https://www.youtube.com/embed/B7wHpNUUT4Y?si=1fyMyDXF9HBumyJK",
      heading: "JavaScript",
      description: "This video is for understanding the basics JavaScript and Advanced JavaScript",
      rating: "⭐⭐⭐⭐⭐"

    },
    {
      link: "https://www.youtube.com/embed/YFlx1C8XwR0?si=4ryc9QXWq19C0O0b",
      heading: "jQuery",
      description: "This video is for understanding the jQuery(A JavaScript library)",
      rating: "⭐⭐⭐⭐"

    },
    {
      link: "https://www.youtube.com/embed/gY5sGvq-8h8?si=BeGldmflftT4ys6Z",
      heading: "React JS",
      description: "This video is for understanding the React JS and Single page Application",
      rating: "⭐⭐⭐⭐⭐"

    },
    {
      link:"https://www.youtube.com/embed/0LhBvp8qpro?si=DUlI8e6kuq2SOHQc",
      heading: "Angular JS",
      description: "This video is for understanding the Angular JS and Single page Application",
      rating: "⭐⭐⭐⭐⭐"

    },
    {
      link: "https://www.youtube.com/embed/qZXt1Aom3Cs?si=J4uQPbGDKoEplajv",
      heading: "Vue JS",
      description: "This video is for understanding the Vue JS.It is a JavaScript framework.",
      rating: "⭐⭐⭐⭐"

    },
    

  ])


  return (
    <div>
      {/*Header section*/}
      <div className="header">
        <div className="image">
        <img src="../images/logofinal.png" alt="" />
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/course">Course</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/games">Games</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className='front-container'data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className="frontend">

          {
            data.map((e, i) => {
              return (
                <div key={i} className='frontend-details'>
                  <div >
                    <iframe src={e.link} frameborder="0" ></iframe>
                  </div>
                  <div className="details1">
                    <h1>{e.heading}</h1>
                    <p>{e.description}</p>
                    <h3>{e.rating}</h3>
                  </div>
                </div>


              )
            })
          }

        </div>

      </div>




    </div>
  )
}

export default Frontend
