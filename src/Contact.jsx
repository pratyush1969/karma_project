import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
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
            <br /><br /><br /><br />
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3856917825965!2d88.38988177483779!3d22.56467363326158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02767d397506af%3A0x2b352e7f5c0bdb12!2sGovernment%20College%20of%20Engineering%20And%20Ceramic%20Technology!5e0!3m2!1sen!2sin!4v1695967682060!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="form-content">
           <div className="form">
           <form action="https://formspree.io/f/xwkdwpje" method='POST' className='form-inputs'>
                <input type="text"placeholder='Enter Your Name' required/>
                <input type="text" placeholder='Enter Your Email' required />
                <textarea name="Ask Your Doubts" id="" cols="30" rows="10" required placeholder='Ask Your Doubts'></textarea>
                <input type="submit" required className='submit'/>
            </form>
           </div>
           </div>
            </div>
           
        </div>
    )
}

export default Contact
