import './work.scss'
import { FaGithub } from "react-icons/fa";

import { FaExternalLinkAlt } from "react-icons/fa";
function Work() {
    return (
        <div className='work' id="work">
            <div className="wrapper">
                <h2>Latest Work</h2>
                <div className="cardContainer">
                    <div className="card">
                        <img className='first' src="/5.png" alt="" />
                        <div className='desc'>
                            <h2>Apex Estate</h2>
                            <p>React.js,SCSS,Node.js,Express.js,Cloudinary</p>
                        </div>
                        <div className="links">
                            <a href="">
                                <FaGithub className='icon' />
                            </a>
                            <a href="">
                                <FaExternalLinkAlt className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/1.png" alt="" />
                        <div className='desc'>
                            <h2>Portfolio Template</h2>
                            <p>React.js ,SCSS ,Json-server,Node.js,Express.js</p>
                        </div>
                        <div className="links">
                            <a href="https://github.com/MayankMx13/joshassmt">
                                <FaGithub className='icon' />
                            </a>
                            <a href="https://joshassmt.vercel.app/">
                                <FaExternalLinkAlt className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/ochi.png" alt="" />
                        <div className='desc'>
                            <h2>Ochi</h2>
                            <p>React.js , Locomotive , GSAP , Tailwind CSS</p>
                        </div>
                        <div className="links">
                            <a href="https://github.com/MayankMx13/Animation-web">
                                <FaGithub className='icon' />
                            </a>
                            <a href="https://animation-web-eight.vercel.app/">
                                <FaExternalLinkAlt className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/blogger.png" alt="" />
                        <div className='desc'>
                            <h2>Blogger</h2>
                            <p>React.js , Tailwind CSS ,Express.js , Node.js </p>
                        </div>
                        <div className="links">
                            <a href="https://github.com/MayankMx13/blogger">
                                <FaGithub className='icon' />
                            </a>
                            <a href="https://blogger-hazel-six.vercel.app/">
                                <FaExternalLinkAlt className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/2.png" alt="" />
                        <div className='desc'>
                            <h2>Tesla.com</h2>
                            <p>HTML ,CSS .JavaScript</p>
                        </div>
                        <div className="links">
                            <a href="https://github.com/MayankMx13/tesla-clonee">
                                <FaGithub className='icon' />
                            </a>
                            <a href="https://tesla-clonee-beta.vercel.app/">
                                <FaExternalLinkAlt className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/3.png" alt="" />
                        <div className='desc'>
                            <h2>Ayur Solutions</h2>
                            <p>HTML ,CSS ,JavaScript ,Node.js, Flask ,Python</p>
                        </div>
                        <div className="links">
                            <a href="https://github.com/MayankMx13/AyurSolutions">
                                <FaGithub className='icon' />
                            </a>
                            <a href="https://ayur-solutions.vercel.app/">
                                <FaExternalLinkAlt className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/4.png" alt="" />
                        <div className='desc'>
                            <h2>Shoe Shop</h2>
                            <p>HTML,CSS,Javascript</p>
                        </div>
                        <div className="links">
                            <a href="https://github.com/MayankMx13/Shoes-Websit">
                                <FaGithub className='icon' />
                            </a>
                            <a href="https://shoes-websit-ten.vercel.app/">
                                <FaExternalLinkAlt className="icon" />
                            </a>
                        </div>
                    </div>






                </div>


            </div>
        </div>
    )
}

export default Work