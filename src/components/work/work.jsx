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
                            <h2>project1</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eos quasi repudiandae, repellendus, distinctio ipsum expedita illum rerum obcaecati cumque est, commodi id.</p>
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
                            <h2>Apex Estate</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eos quasi repudiandae, repellendus, distinctio ipsum expedita illum rerum obcaecati cumque est, commodi id.</p>
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
                        <img src="/2.png" alt="" />
                        <div className='desc'>
                            <h2>Portfolio Template</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eos quasi repudiandae, repellendus, distinctio ipsum expedita illum rerum obcaecati cumque est, commodi id.</p>
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
                            <h2>Tesla.com</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eos quasi repudiandae, repellendus, distinctio ipsum expedita illum rerum obcaecati cumque est, commodi id.</p>
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
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eos quasi repudiandae, repellendus, distinctio ipsum expedita illum rerum obcaecati cumque est, commodi id.</p>
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