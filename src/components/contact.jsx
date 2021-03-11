import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
    <div>
        <section className="colorlib-contact" data-section="contact">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Get in Touch</span>
                    <h2 className="colorlib-heading">Contact</h2>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-5">
                    <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                        <div className="colorlib-icon">
                            <i className="icon-cloud-download2"></i>
                        </div>
                        <div className="colorlib-text">
                            <p><a href="https://drive.google.com/file/d/1inP93CWCnXS_v_vo0TCYbQ51O2TsImwV/view?usp=sharing"><span class="__cf_email__" data-cfemail="e1888f878ea1858e8c80888fcf828e8c">Resume</span></a></p>
                        </div>
                    </div>
                    <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                        <div className="colorlib-icon">
                            <i className="icon-mail5"></i>
                        </div>
                        <div className="colorlib-text">
                            <p><a href="mailto:yvonnehang90@gmail.com"><span class="__cf_email__" data-cfemail="e1888f878ea1858e8c80888fcf828e8c">yvonnehang90@gmail.com</span></a></p>
                        </div>
                    </div>
                    <div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                        <div class="colorlib-icon">
                            <i class="icon-map3"></i>
                        </div>
                        <div class="colorlib-text">
                            <p>College Station, Texas 77840</p>
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