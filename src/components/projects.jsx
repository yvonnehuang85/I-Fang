import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
                    <div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Projects</span>
								<h2 className="colorlib-heading animate-box">Personal Website</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/project5.png)'}}>
									<div className="desc">
										<div className="con">
                                            <div className="footer">
                                                <h3 className={"back"}><a href="https://github.com/yvonnehuang85/I-Fang">Personal Website</a></h3>
                                                <span  className={"continue"} >Mar. 2022 </span>
                                            </div>
											<p> <br></br>
                                            I developed my personal website based on Colorlib, designed the front-end with ReactJS, and deployed to github page.
                                            </p>
                                            <p className="icon">
                                                <span><a href="https://github.com/yvonnehuang85/I-Fang">
                                                        <i className="col-md-10"/>
                                                            <i className="icon-eye2" /> website
                                                            <i className="icon-flag" /> A
                                                            <i className="icon-thumbs-up" /> B
                                                    </a>
                                                </span>
                                            </p>
                                        </div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<h2 className="colorlib-heading animate-box">Learn From Udemy</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/project1.png)'}}>
									<div className="desc">
										<div className="con">
                                            <div className="footer">
                                                <h3 className={"back"}><a href="https://github.com/yvonnehuang85/carzone-project">Car Selling Website</a></h3>
                                                <span  className={"continue"} >Dec. 2020 – Jan. 2021 </span>
                                            </div>
											<p> {'\u2023'} Implemented solid functionalities (search, pagination), with data stored dynamically into PostgreSQL.<br></br>
                                                {'\u2023'} Customized the admin backend, allowing login through Facebook and Google account. (JavaScript / HTML)<br></br>
                                                {'\u2023'} Automatically sent emails to admin when customers leave messages on the website. (Python)<br></br>
                                                {'\u2023'} Deployed Django App to Heroku.
                                            </p>
                                            <p className="icon">
                                                <span><a href="https://demo-django-0116.herokuapp.com/">
                                                        <i className="col-md-10"/>
                                                            <i className="icon-share3" /> Heroku
                                                    </a>
                                                </span>
                                            </p>
                                        </div>
									</div>
								</div>
							</div>
							
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
						</div>

                        <div className="row">
							<div className="col-md-10 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<h2 className="colorlib-heading animate-box">Learn From Youtube</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/project2.png)'}}>
									<div className="desc">
										<div className="con">
                                            <div className="footer">
                                                <h3 className={"back"}><a href="https://github.com/yvonnehuang85/MultiUserChat">Multi-User Chatting Application</a></h3>
                                                <span  className={"continue"} >Oct. – Nov. 2020 </span>
                                            </div>
											<p> <br></br>{'\u2023'} Developed worker thread to handle multiple client connections to client/socket server.<br></br>
                                                {'\u2023'} Featured with broadcasting online or offline status. <br></br>
                                                {'\u2023'} Embedded frontend and backend by creating chat client graphical user interface. (Java Swing)
                                            </p>
                                            <p className="icon">
                                                <span><a href="https://github.com/yvonnehuang85/MultiUserChat">
                                                        <i className="col-md-8"/>
                                                            <i className="icon-github" /> GitHub
                                                    </a>
                                                </span>
                                                <span><a href="https://www.youtube.com/watch?v=RNoW3JUqD4s">
                                                        <i className="icon-youtube" /> Demo
                                                    </a>
                                                </span>
                                            </p>
                                        </div>
									</div>
								</div>
							</div>
                    
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/project3.png)'}}>
									<div className="desc">
										<div className="con">
                                            <div className="footer">
                                                <h3 className={"back"}><a href="https://github.com/yvonnehuang85/springBootProject">Customer’s Data Management Application</a></h3>
                                                <span  className={"continue"} >Apr. - May 2020 </span>
                                            </div>
											<p> <br></br>
                                                <br></br>
                                                {'\u2023'} Construct CRUD functionalities to maintain customer’s information.<br></br>
                                                {'\u2023'} Integrated backend REST web services (Spring Boot) with user interface (ReactJS) in MySQL.
                                            </p>
                                            <p className="icon">
                                                <span><a href="https://github.com/yvonnehuang85/springBootProject">
                                                        <i className="col-md-8"/>
                                                            <i className="icon-github" /> GitHub
                                                    </a>
                                                </span>
                                                <span><a href="https://www.youtube.com/watch?v=ArYzjHxkxOs">
                                                        <i className="icon-youtube" /> Demo
                                                    </a>
                                                </span>
                                            </p>
                                        </div>
									</div>
								</div>
							</div>
                        </div>
                        
                        <div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<h2 className="colorlib-heading animate-box">Course (Team Project)</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/project4.png)'}}>
									<div className="desc">
										<div className="con">
                                            <div className="footer">
                                                <h3 className={"back"}><a href="https://github.com/yvonnehuang85/carzone-project">Biology Learning Game</a></h3>
                                                <span  className={"continue"} > Jan. – May 2020 </span>
                                            </div>
											<p> <br></br>
                                                <br></br>
                                                {'\u2023'} Developed frontend app to work well on different devices and browsers. (JavaScript / HTML / CSS)<br></br>
                                                {'\u2023'} Design user interaction games for middle-school biology learning materials.

                                            </p>
                                            <p className="icon">
                                                <span><a href="https://vimeo.com/415044250">
                                                        <i className="col-md-10"/>
                                                            <i className="icon-vimeo2" /> Video
                                                    </a>
                                                </span>
                                            </p>
                                        </div>
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
