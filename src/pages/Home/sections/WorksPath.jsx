import React from 'react';

function WorksPath() {
  return (
    <section className="works-path">
      <div className="container">
        <h3 className="works-path__title">How it works</h3>
        <div className="works-path__items">
          <div className="works-path__items-box">
            <div className="works-path__item works-path__item--consultation">
              <img
                className="works-path__item-img"
                src="/img/icons/works-path/graphic-tool.svg"
                alt="icon"
              />
              <h6 className="works-path__item-title">Designer Consultation</h6>
              <p className="works-path__item-text">
                Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo
                bushwick coloring book. Semiotics man bun venmo viral cliche
              </p>
            </div>
            <div className="works-path__item works-path__item--production">
              <img
                className="works-path__item-img"
                src="/img/icons/works-path/sofa.svg"
                alt="icon"
              />
              <h6 className="works-path__item-title">Production</h6>
              <p className="works-path__item-text">
                Everyday carry actually neutra authentic kogi shabby chic
              </p>
            </div>
          </div>
          <div className="works-path__item works-path__item--measuring">
            <img
              className="works-path__item-img"
              src="/img/icons/works-path/measuring-tape.svg"
              alt="icon"
            />
            <h6 className="works-path__item-title">Measurements</h6>
            <p className="works-path__item-text">
              Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorksPath;
