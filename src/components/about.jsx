import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a second-year master student of Computer Engineering at Texas A&M University. I specialize in <span style={{ fontWeight: 'bold'}}>Python</span> and <span style={{ fontWeight: 'bold'}}>Java</span>. 
                    I worked as a <span style={{ fontWeight: 'bold'}}>Java Backend Software Intern</span> in <a href="https://www.funpodium.net/" rel="noreferrer" target="_blank">Funpodium</a>.
                    During my last internship, I implemented two micro services of crawling data from the sport website with Java Spring. 
                    It triggered my interest in back-end area.<br></br>
                    Now I am exploring Django, Kubernetes and ReactJS. My interests have expanded even further.</p>
                    <p>Expected to graduate in May, 2021. I am now actively seeking opportunities in software engineering.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Expertise {'\uff06'} Interested area </h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <span className="icon">
                        <i className="icon-cog2"/>
                    </span>
                    <div className="desc">
                        <h3>Microservices</h3>
                        <p>During the last internship, I focused on Backend team at Funpodium and working with tools like <span style={{ fontWeight: 'bold'}}>SpringBoot, Docker, MongoDB and MySQL</span>.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-device-desktop" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>Creating a car selling website with <span style={{ fontWeight: 'bold'}}>Javascript / HTML</span> for the front-end and deployed the application to <span style={{ fontWeight: 'bold'}}>Heroku</span>.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-infinity" style={{fontSize: "40px"}} />
                </span>
                <div className="desc">
                    <h3>DeVops</h3>
                    <p>I learned the concept of <span style={{ fontWeight: 'bold'}}>Kubernetes</span> from Udemy. I explored how to deploy a service or several microservices to google cloud.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
