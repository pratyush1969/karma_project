import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'
const Blog = () => {
    const [blog, setblog] = useState([])

    useEffect(() => {
        getdata()
        window.scrollTo(0, 0)
    }, [])

    function getdata() {
        fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=93802bcda669407881dc1d31bda46c5a`)
            .then(res => res.json())
            .then(data => setblog(data.articles))
    }


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
            <div className="card-container"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div className="card-body"data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
              {
                 blog.map((e,i)=>{
                    return(
                      <div className="cards" key={i} >
                        <img src={e.urlToImage} alt="" />
                        <div className="card-details" >
                            <p><b>Title:-</b>{e.title}</p>
                            <p><b>Author:-</b>{e.author}</p>
                            <p><b>Date:-</b>{e.publishedAt}</p>
                            <button><Link to={e.url}>Learn More</Link></button>
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

export default Blog
