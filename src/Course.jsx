import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import data from './course .json'
const Course = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
      <br />  <br />  <br />

      <div className="input-container">
        <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
          setSearchTerm(event.target.value);
        }} />
      </div>

      {/*Content-container */}
      <div className="content-container"data-aos="zoom-out-left" >

        {
          data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }

            })
            .map((val) => {
              return (
                <div className="content-list">
                  <img src={val.image} alt="" />
                  <div className="details">
                    <h2>{val.title}</h2>
                    <p>{val.description}</p>
                    <h3>{val.rating}</h3>
                    <button><Link to={val.link}>Enroll Now</Link></button>
                  </div>
                </div>


              )
            })
        }

      </div>
    </div>
  )
}

export default Course
