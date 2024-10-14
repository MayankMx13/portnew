
import { useEffect, useRef } from 'react';
import './hero.scss'
import Typed from 'typed.js';


function Hero() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['A Student', 'A Tech Enthusiast', 'A Developer'],
            typeSpeed: 60,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div className='hero' id='hero'>
            <div className="wrapper">
                <div className='name'>Hey I'm Mayank.</div>
                <div className='designation'>A final year Engineering Student</div>
                <div className="things" >
                    <span ref={el} />
                </div>

                <div className='buttons'>

                    <a href="https://www.linkedin.com/in/mayank-mishra-sde/" target='_blank' className='btn1' >Connect with me</a>
                    <a
                        className='btn2'
                        href="/Mayank_mishra_SDE.pdf"
                        download="Mayank_mishra_SDE"
                    >Resume
                    </a>
                </div>

            </div>


        </div>
    )
}


export default Hero