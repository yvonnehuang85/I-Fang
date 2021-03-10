import React, { Component } from 'react'


export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                    <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                            <i className="icon-briefcase3" />
                        </div>
                        <div className="timeline-label">
                        <div className="footer">
                            <h2 className={"back"}> Internship at Funpodium  </h2>  
                            <span  className={"continue"} >Jun. - Aug. 2020</span>
                        </div>
                            <p>   As a backend software engineer intern, I constructed two micro services for crawling data from sport website and designed another micro service for dealing with data. 
                                For sport grab service, we grab different data from sport website including team, player, match lists, and then we set into rabbitMQ. 
                                For sport data service, with topic exchange of RabbitMQ, we receive the data from grab service, and separately put them into MongoDB(raw data)and MySQL(processed data).
                                Also we scheduled the process of getting API at a fix frequency to check the data in the database is correct, and we construct a docker-compose to combine RabbitMQ, MongoDB, MySQL.
                                <br></br>
                                <br></br>{'\u2B24'} Built microservices, docker compose for data crawling from sport website. (Spring Boot / RabbitMQ)
                                <br></br>{'\u2B24'}	Maintained the data in both MongoDB and MySQL.
                                <br></br>{'\u2B24'}	Designed a rule verification engine to dynamically check configurations for the DevOps department. (Python)
                                <br></br>{'\u2B24'}	Increased the efficiency of flexibly-log-recording by 33%, via adopting the aspect-oriented programming paradigm. (Java)
                                <br></br>
                                <br></br>
                            <img className='photo' src='images/Concept.png' alt="Concept Structure" /></p>
                        </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <div className="footer">
                            <h2 className={"back"}> CAD Engineer at Advanced Wireless Semiconductor</h2>  
                            <span  className={"continue"} >Jan. - Jul. 2019</span>
                        </div>
                        <p> I had a full-time work experience as a CAD engineer in Taiwan. My job is to provide process design kit to IC design company. Depending on their needs and the technique our comapny can handle, I need to design the best process kit for customers.
                            <br></br>
                            <br></br>{'\u2B24'} Provided backend parameterized cells of process design kit through Linux to IC design companies such as Qualcomm and Skyworks. (Cadence)
                            <br></br>{'\u2B24'} Optimized the efficiency of design rule checking and layout versus schematic by 50% for verifying IC. 
                        </p> 
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <div className="footer">
                            <h2 className={"back"}> Master's Degree at Taxas A&M University <span> GPA:3.9</span> </h2>  
                            <span  className={"continue"} >2019-2021</span>
                        </div>
                        <p> 
                            I am pursuing my master's degree with major in Computer Engineering. 
                            <br></br>I have taken courses like Analysis of Algorithms, Software Engineering, Artificial Intelligence, Machine Learning, 
                            Distributed System and Cloud Computing, and Secure Computer system & Architecture.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <div className="footer">
                            <h2 className={"back"}> Bachelor's Degree at National Chung Cheng University <span> GPA:3.6</span> </h2>  
                            <span  className={"continue"} >2014-2018</span>
                        </div>
                        <p>
                            During my university, I joined Integrated Circuit Design Laboratory and I focused on Peak-to-Peak Jitter Sensor.
                        </p> 
                      </div>
                    </div>

                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
