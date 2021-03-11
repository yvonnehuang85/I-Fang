import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div>
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Specialty</span>
                            <h2 className="colorlib-heading animate-box">My Skills</h2>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                            <div className="fancy-collapse-panel">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingOne">
                                        <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Programming Languages & Database</a>
                                        </h4>
                                    </div>

                                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="panel-body">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <p><img className='photoSkill' src='images/python.png' alt="logo" /> Python</p>
                                                    
                                                        <p><img className='photoSkill' src='images/mysql.png' alt="logo" /> MySQL</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <p><img className='photoSkill' src='images/java.png' alt="logo" /> Java</p>

                                                        <p><img className='photoSkill' src='images/mongodb.png' alt="logo" /> MongoDB</p>    
                                                    </div>
                                                    <div className="col-md-2">
                                                        <p><img className='photoSkill' src='images/reactjs.png' alt="logo" /> ReactJS</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <p>JavaScript</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <p>HTML</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <p>CSS</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>


                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo">
                                        <h4 className="panel-title">
                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Tools & Framework</a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <p>Spring Boot</p>
                                                    <p>Kubernetes</p>
                                                </div>
                                                <div className="col-md-2">
                                                    <p>Django</p>  
                                                </div>
                                                <div className="col-md-2">
                                                    <p>Linux</p>
                                                </div>
                                                <div className="col-md-2">
                                                    <p><img className='photoSkill' src='images/git.png' alt="logo" />Git</p>
                                                </div>
                                                <div className="col-md-2">
                                                    <p><img className='photoSkill' src='images/docker.png' alt="logo" />Docker</p>
                                                </div>
                                                <div className="col-md-2">
                                                    <p>Heroku</p>
                                                </div>                                              
                                            </div>
                                        </div>
                                    </div>
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