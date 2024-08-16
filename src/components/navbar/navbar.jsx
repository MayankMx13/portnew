import './navbar.scss'
import { Link } from 'react-scroll';



function Navbar() {
    return (
        <div className='navbar'>

            <nav className="navContainer">
                <Link to="hero" smooth={true} duration={500} >Home</Link>
                <Link to="aboutme" smooth={true} duration={500}>About Me</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                <Link to="work" smooth={true} duration={500}>Portfolio</Link>

            </nav>

        </div>
    )
}

export default Navbar