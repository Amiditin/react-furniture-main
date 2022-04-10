import React from 'react';

function Inspiration() {
  return (
    <section className="inspiration">
      <img className="inspiration__background" src="/img/inspiration-bg.jpg" alt="background" />
      <div className="container-fluid">
        <div className="inspiration__inner">
          <img className="inspiration__img" src="/img/inspiration-decor.png" alt="img-decor" />
          <div className="inspiration__content">
            <h3 className="inspiration__title">Our Inspiration in details</h3>
            <p className="inspiration__text">
              Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth
              helvetica jean shorts. Fanny pack church-key cornhole, banh mi thundercats gochujang
              keytar.
            </p>
            <ul className="inspiration__list">
              <li className="inspiration__item">
                <div className="inspiration__item-content">
                  <p className="inspiration__item-text">Design and technical drawings</p>
                  <p className="inspiration__percent">80%</p>
                </div>
                <div className="inspiration__line" style={{ width: '80%' }}></div>
              </li>
              <li className="inspiration__item">
                <div className="inspiration__item-content">
                  <p className="inspiration__item-text">Measurments</p>
                  <p className="inspiration__percent">70%</p>
                </div>
                <div className="inspiration__line" style={{ width: '70%' }}></div>
              </li>
              <li className="inspiration__item">
                <div className="inspiration__item-content">
                  <p className="inspiration__item-text">Furniture functionality analysis</p>
                  <p className="inspiration__percent">75%</p>
                </div>
                <div className="inspiration__line" style={{ width: '75%' }}></div>
              </li>
              <li className="inspiration__item">
                <div className="inspiration__item-content">
                  <p className="inspiration__item-text">Interior visualization</p>
                  <p className="inspiration__percent">40%</p>
                </div>
                <div className="inspiration__line" style={{ width: '40%' }}></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspiration;
