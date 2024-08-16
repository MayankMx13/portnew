import './intouch.scss'
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";


function Intouch() {




    return (
        <div className='intouch' id='contact'>
            <h2>Get In Touch</h2>
            <div className="wrapper">


                <div className="left">
                    <div className='head'>Let's Talk</div>
                    <div>
                        <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    </div>
                    <div className="iconContainer">
                        <IoIosMail />
                        <span >mayankmishra3214@gmail.com</span>
                    </div>
                    <div className="iconContainer">
                        <IoCallSharp />
                        <span>**********</span>
                    </div>
                    <div className="iconContainer">
                        <FaLocationDot />
                        <span>New Delhi,India</span>

                    </div>

                    <div className="iconContainer2">
                        <a href="https://github.com/MayankMX13" target='_blank'> <FaGithub /></a>

                        <a href="https://www.linkedin.com/in/mayank-mishra-sde/" target='_blank'><AiFillLinkedin />
                        </a>

                    </div>
                </div>
                <div className="right">

                    <form action="https://formsubmit.co/mayankmishra3214@gmail.com" method="POST">
                        <input type="hidden" name="_captcha" value="false"></input>




                        <label htmlFor="name">Your Name</label>
                        <input type="text" name='name' className='' placeholder='Enter your name' />

                        <label htmlFor="email">Your Email</label>
                        <input type="email" name='email' className='' placeholder='Enter your Email' />
                        <label htmlFor="message">Your Message</label>
                        <textarea name="message" placeholder='Your message'></textarea>

                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Submit Now
                        </button>




                    </form>
                </div>

            </div>

        </div>
    )
}

export default Intouch