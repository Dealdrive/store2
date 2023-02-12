import React from "react"
import logo from "../../components/assets/images/logo.png"
import mLogo from "../../components/assets/images/mlogo.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  const mystyle = {
    width: "150px",
    height: "60px",
    margin: "0 auto",
    marginRight: "10px"
  }
  const mstyle = {
    width: "50px",
    height: "50px",
    margin: "0 auto"
  }

  const mystyle2 = {
    width: "100%"
  }
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width ' style={mystyle}>
          <Link to='/'>
          <img  style={mystyle2} className='lg' src={logo} alt='' />
          <img  style={mstyle} className='sm' src={mLogo} alt='' />
          </Link>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
