import { FaBars, FaTimes } from 'react-icons/fa'
import {useRef} from 'react'
import './navbar.css'

const NavBar = ()=> {
  const navRef = useRef();

  const showNavBar = ()=> {
    navRef.current.classList.toggle("responsive_nav")
  }

  return(
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="">Home</a>
        <a href="">My Work</a>
        <a href="">Blog</a>
        <a href="">About me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  )
}

export default NavBar