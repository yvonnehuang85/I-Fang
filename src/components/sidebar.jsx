import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">I-Fang Huang</a></h1>
              <a href="mailto:yvonnehang90@gmail.com"><span className="email"><i className="icon-mail"></i> yvonnehang90@gmail.com</span></a>
              
              <span className="address"><i className="icon-location-arrow"></i>College Station, TX</span>
            </div>
            <br></br>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/* <li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/i-fang-huang/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/yvonnehuang85" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.facebook.com/evonne.hung.16/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/yvonne__huang0806/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                {/* <li><a href="https://www.youtube.com/watch?v=RNoW3JUqD4s" target="_blank" rel="noopener noreferrer"><i className="icon-youtube"></i></a></li> */}
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                <i className="icon-lightbulb"></i>Learn from: <a href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/" target="_blank" rel="noopener noreferrer">Dhruv Barochiya</a>
                <br></br>
                Template Reference: <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              </small></p>
              <p><small>
                Continued Updating <i class="icon-pencil"></i>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
