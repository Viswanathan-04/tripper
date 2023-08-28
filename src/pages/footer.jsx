import './footer.css'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';

function Footer()
{
    return(
        <div className='footer-bar'>
            <div className='quick-links'>
                <h2 className='quick-font'>Quick Links</h2>
                <ul>
                    <li>
                        <a href='/' className='active'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Services</a>
                    </li>
                    <li>
                        <a href='/'>Explore</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='contact'>
                <h2 className='contact-font'>Contact us</h2>
                <div className='contact-1'>
                    <p>Phone : +91 7596854625</p>
                    <p>Email ID : tourismtripper@gmail.com</p>
                </div>
                <div className='contact-2'>
                    <a href='https://instagram.com'><FaInstagram></FaInstagram></a>
                    <a href='https://twitter.com'><FaTwitter></FaTwitter></a>
                    <a href='https://facebook.com'><FaFacebook></FaFacebook></a>
                    <a href='https://youtube.com'><FaYoutube></FaYoutube></a>
                </div>
            </div>
            <div className='queries'>
                <h2 className='queries-font'>Want to connect ?</h2>
                <input className='mail-id-1' placeholder='Enter your mail-id' onGotPointerCapture=""></input>
                <button className='submit-mail'>Submit</button>
                <p className='copyrights'>&copy; 2023 Tripper Tourism</p>
            </div>
        </div>
    )
}

export default Footer;