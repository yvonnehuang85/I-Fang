import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/1.png)'}}>
                <div className="overlay" />
                <div className="container-fluid">

                  {/* <div class="row">
                    <div class="col-md-8 slider-text-inner">
                      <div className="desc">
                        <h1> </h1>
                      </div>
                    </div>
                  </div> */}
                

                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="col-md-10 slider-text-inner">
                        <div className="desc">
                          <h1>Howdy!<br></br> I am Yvonne.</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1inP93CWCnXS_v_vo0TCYbQ51O2TsImwV/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV <i className="icon-download" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/2-2.png)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>From<br /> Texas A{'\uff06'}M University </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/yvonnehuang85" target="_blank" rel="noopener noreferrer">View Projects On GitHub <i className="icon-github"/></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
