import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import DarkVariantExample from './Carsoul'

const Home = () => {
   
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
            {/*Herosectiom*/}
            <DarkVariantExample />
            {/*About Section */}
            <div className="about"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
                <div className="image">
                    <img src="https://wallpapercave.com/wp/wp3205272.jpg" alt=""  />
                </div>
                <div className="about-para" >
                    <h2 style={{ fontFamily: 'verdana', color: '#e84393', textDecoration: 'underline' }}>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim numquam odit molestias obcaecati excepturi unde suscipit commodi dignissimos velit ut eveniet vel recusandae eius doloribus pariatur nam hic facilis atque, a distinctio neque magni. Assumenda distinctio iusto eaque vero voluptatibus quidem, ea quibusdam obcaecati animi magni incidunt perferendis deserunt aspernatur id totam magnam molestiae temporibus molestias, itaque, ullam quaerat sunt. Ratione pariatur minus deserunt amet obcaecati harum debitis rem quia. Rerum repellendus sed, quam dolorum, vero nostrum molestiae architecto nesciunt repellat, repudiandae adipisci! Distinctio at omnis</p>
                    <div className="about-btn">
                        <button>
                            <Link to="/blog">Learn More</Link>
                        </button>
                    </div>
                </div>
            </div>
            {/*Benefit section */}
            <div className="benefit" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <h1 style={{ fontFamily: 'verdana', color: '#e84393', textDecoration: 'underline' }}>Benefits</h1>
                <div className="benefit-section">
                    <div className="benefits">
                        <i class="fa-solid fa-person-chalkboard fa-beat-fade"></i>
                        <div className="benefit-content">
                            <h2>Best Teachers</h2>
                            <p>We have the best teachers with doubt solving classes</p>
                        </div>
                    </div>
                    <div className="benefits">
                        <div className="benefit-content">
                            <h2>Useful Contents</h2>
                            <p>Useful contents are described in easy way</p>
                        </div>
                        <i class="fa-solid fa-laptop fa-bounce"></i>
                    </div>
                    <div className="benefits">
                        <i class="fa-solid fa-code fa-spin-pulse"></i>
                        <div className="benefit-content">
                            <h2>Variety of Contents</h2>
                            <p>Vast collection of contents of different topics</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*teammate section */}
            <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                <h1 style={{ textAlign: 'center', margin: '50px', color: '#e84393', textDecoration: 'underline' }}>Our Team Mates</h1>
                <div className="teammates">
                    <div className="persons">
                        <img src="Pratyush.jpeg" alt="" />
                        <h3>Pratyush Sarkar</h3>
                        <h6>Front End Developer and UI/UX Designer</h6>
                        <p>Skills:-HTML,CSS,Bootstrap,JavaScript,React JS,Express JS</p>
                    </div>

                    <div className="persons">
                        <img src="YEASA.jpg" alt="" />
                        <h3>Yeasa Mondal</h3>
                        <h6>Front End Developer and C++ programmer</h6>
                        <p>Skills:-HTML,CSS,Bootstrap,C,C++,python</p>
                    </div>

                    <div className="persons">
                        <img src="soumyadip.jpg" alt="" />
                        <h3>Soumyadip Dhara</h3>
                        <h6>Python and Java Programmer</h6>
                        <p>Skills:-C,C++,Python,Java</p>
                    </div>

                    <div className="persons">
                        <img src="Triniket.jpeg" alt="" />
                        <h3>Triniket Maiti</h3>
                        <h6>Back End Developer</h6>
                        <p>Skills:-Node JS,Express JS,MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
