import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
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
            <div className="about" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <div className="image">
                    <img src="https://wallpapercave.com/wp/wp3205272.jpg" alt="" />
                </div>
                <div className="about-para" >
                    <h2 style={{ fontFamily: 'verdana', color: '#e84393', fontWeight: '700' }}>About Us</h2>
                    <p>Hey Everyone,this website is made in such a way that the user can understand and study in proper way.In
                        this website we create two section - study and play.In Study section,there are learing videos and in
                        play section user can play various games.actually The games are based upon the study materials.Actually
                        here ,the games are designed in such a away that user can reflects his/her knowladge in this game as the
                        games are made depends upon that study materials.As there is study section as well as play section so
                        the user will never get bored and can also enjoy the learning by studying as well by playing.</p>
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
                <h1 style={{ fontFamily: 'verdana', color: '#e84393', fontWeight: '700' }}>Benefits</h1>
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
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h1 style={{ textAlign: 'center', margin: '50px', color: '#e84393', fontWeight: '700' }}>Our Team</h1>
                <div className="container">
                    <div className="grid">
                        <div className="card">
                            <div className="card_img">
                                <img src="Pratyush.jpeg" alt="" />
                            </div>
                            <div className="card_body">
                                <h2 className="card_title">Pratyush Sarkar</h2>
                                <div className="social_box">
                                    <Link target='_blank' to="https://www.facebook.com/pratyush.sarkar.5074"><Icon icon="logos:facebook" fontSize={24} /></Link>
                                    <Link target='_blank' to="https://instagram.com/pratyush.sarkar.5074"><Icon icon="skill-icons:instagram" fontSize={24} /></Link>
                                    <Link target='_blank' to="https://github.com/pratyush1969"><Icon icon="icon-park:github" fontSize={24} /></Link>
                                    <Link target='_blank' to="https://www.linkedin.com/in/pratyush-sarkar-a3ba90246"><Icon icon="skill-icons:linkedin" fontSize={24} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src="Triniket.jpeg" alt="" />
                            </div>
                            <div className="card_body">
                                <h2 className="card_title">Triniket Maiti</h2>
                                <div className="social_box">
                                    <Link target='_blank' to="https://www.facebook.com/triniket.maiti.1"><Icon icon="logos:facebook" fontSize={24} /></Link>
                                    <Link target='_blank' to="https://www.instagram.com/mighty_3niket"><Icon icon="skill-icons:instagram" fontSize={24} /></Link>
                                    <Link target='_blank' to="https://github.com/Mighty3Niket"><Icon icon="icon-park:github" fontSize={24} /></Link>
                                    <Link target='_blank' to="https://www.linkedin.com/in/triniket-maiti"><Icon icon="skill-icons:linkedin" fontSize={24} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src="YEASA.JPG" alt="" />
                            </div>
                            <div className="card_body">
                                <h2 className="card_title">Yeasa Mondal</h2>
                                <div className="social_box">
                                    <Icon icon="logos:facebook" fontSize={24} />
                                    <Link target='_blank' to="https://www.instagram.com/ye_asaaaaa"><Icon icon="skill-icons:instagram" fontSize={24} /></Link>
                                    <Link target='_blank' to="https://github.com/yeasa"><Icon icon="icon-park:github" fontSize={24} /></Link>
                                    <Link target='_blank' to="https://www.linkedin.com/in/yeasa-mondal-573a82216"><Icon icon="skill-icons:linkedin" fontSize={24} /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_img">
                                <img src="Soumyadip.jpeg" alt="" />
                            </div>
                            <div className="card_body">
                                <h2 className="card_title">Soumyadip Dhara</h2>
                                <div className="social_box">
                                    <Icon icon="logos:facebook" fontSize={24} />
                                    <Icon icon="skill-icons:instagram" fontSize={24} />
                                    <Icon icon="icon-park:github" fontSize={24} />
                                    <Icon icon="skill-icons:linkedin" fontSize={24} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
