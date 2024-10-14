import './aboutme.scss'

function Aboutme() {
    return (
        <div className='aboutme' id="aboutme">
            <div className="wrapper">
                <div className='about'>About Me</div>
                <div className='desc'>I am a final year Engineering Student from KIET Group of Institutions

                    I take keen interest in technology and BasketBall. I am well versed with Java. I am into Full Stack Developement</div>
                <div className="skills">
                    <div className="skill">
                        <span className='tag'>HTML & CSS</span> <span className='bars bar1'></span>
                    </div>
                    <div className="skill">
                        <span className='tag'>Javascript</span> <span className='bars bar2'></span>
                    </div>
                    <div className="skill">
                        <span className='tag'>Node.js & Express</span> <span className='bars bar3'></span>
                    </div>
                    <div className="skill">
                        <span className='tag'>MongoDB</span> <span className='bars bar4'></span>
                    </div>
                    <div className="skill">
                        <span className='tag'>SASS</span> <span className='bars bar5'></span>
                    </div>
                    <div className="skill">
                        <span className='tag'>Tailwind CSS</span> <span className='bars bar6'></span>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Aboutme