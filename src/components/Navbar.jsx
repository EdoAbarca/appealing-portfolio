import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const Navbar = ({navOpen}) => {

  const lastActiveLink = useRef()
  const activeBox = useRef()
  const initActiveBox = () =>{
    console.log(lastActiveLink.current);
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetWeight + 'px';
  }

  useEffect(initActiveBox, []);
  window.addEventListener('resize', initActiveBox);

  const activeCurrentLink = (event) =>{
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = event.target.lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = event.target.lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = event.target.lastActiveLink.current.offsetWeight + 'px';
  }

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];
  return (
    <nav className={'navbar ' + (navOpen ? 'active':'')}>
      {navItems.map(({label, link, className, ref}, key) => (
        <a 
        href={link}
        key={key}
        ref={ref}
        className={className}
        onClick={activeCurrentLink}
        >
          {label}
        </a>))
        }
        <div className='active-box' ref={activeBox}></div>
    </nav>
  )
}

Navbar.PropTypes = {
  navOpen: PropTypes.bool.isRequired
}

export default Navbar;