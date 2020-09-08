import React from 'react'
import Fade from 'react-reveal/Fade'

const Four = props => (
  <Fade up>
    <section id="four" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>Accumsan sed tempus adipiscing blandit</h2>
          <p>
            Iaculis ac volutpat vis non enim gravida nisi faucibus posuere arcu
            consequat
          </p>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-chart-area"><img src={adobe.png} /></span>
              <h3>Adobe Illustrator</h3>
              <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-comment"></span>
              <h3>Adobe Photoshop</h3>
              <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-flask"></span>
              <h3>Adobe After Effects</h3>
              <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-paper-plane"></span>
              <h3>Wordpress</h3>
              <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-file"></span>
              <h3>GitHub</h3>
              <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-lock"></span>
              <h3>Rhinoceros</h3>
              <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p>
            </section>
          </div>
        </div>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="/" className="button">
                Magna sed feugiat
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  </Fade>
)

export default Four
