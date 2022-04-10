import React from 'react';
import { Link } from 'react-router-dom';

import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Aside from './Aside';

function BlogItem() {
  return (
    <main className="main">
      <section className="blog">
        <div className="container">
          <div className="blog__inner">
            <div className="blog__items">
              <div className="blog__item">
                <img className="blog__item-img" src="/img/blog/3.jpg" alt="img" />
                <div className="blog__item-info">
                  <span className="blog__item-date">August 15, 2020 | </span>
                  <span className="blog__item-author">by Ann Summers | </span>
                  <span className="blog__item-category">Bedroom Furniture</span>
                </div>
                <h3 className="blog__item-title">
                  Red selfies edison bulb four dollar toast humblebrag for the furniture
                </h3>
                <p className="blog__item-text">
                  Everyday carry actually neutra authentic kogi shabby chic migas small batch craft
                  beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af
                  man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard
                  thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin
                  edison bulb farm-to-table. Yuccie portland kickstarter, readymade ramps humblebrag
                  ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric
                  tousled austin, kinfolk scenester authentic craft beer truffaut irony
                  intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral
                  cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art.
                  Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi
                  whatever swag pop-up seitan. Yuccie portland kickstarter, readymade ramps
                  humblebrag ennui banjo mumblecore vaporware pickled cray stumptown 8-bit mlkshk.
                  Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony
                  intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral
                  cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan street art.
                  Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa kogi
                  whatever swag pop-up seitan.
                </p>
                <div className="blog__item-tags">
                  <h4 className="blog__item-title">Tags</h4>
                  <span className="blog__tags-item">Bedroom furniture</span>
                  <span className="blog__tags-item">Office furniture</span>
                  <span className="blog__tags-item">Dining room futniture</span>
                  <span className="blog__tags-item">Chair</span>
                </div>
                <div className="blog__item-links">
                  <Link className="blog__item-link blog__item-link-prev" to="/">
                    <img
                      className="blog__item-img-prev"
                      src="/img/arrow-norm-left.svg"
                      alt="arrow"
                    />
                    Cred selfies edison bulb four dollar toast humblebrag
                  </Link>
                  <Link className="blog__item-link blog__item-link-next" to="/">
                    Semiotics fixie four dollar toast, next level
                    <img
                      className="blog__item-img-next"
                      src="/img/arrow-norm-right.svg"
                      alt="arrow"
                    />
                  </Link>
                </div>
                <div className="blog__item-comments">
                  <h4 className="blog__item-comments-title">Comments:</h4>
                  <div className="blog__item-comments-item">
                    <img className="blog__item-comments-avatar" src="img/avatar.jpg" alt="avatar" />
                    <div className="blog__item-comments-info">
                      <p className="blog__item-comments-name">Lea Brown</p>
                      <p className="blog__item-comments-date">August 12, 2020</p>
                      <p className="blog__item-comments-text">
                        Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut
                        irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun
                        venmo viral cliche
                      </p>
                    </div>
                  </div>
                </div>
                <div className="blog__item-form">
                  <h4 className="blog__item-form-title">Post a comment</h4>
                  <TextArea placeholder="Your comment" />
                  <Button ClassName="black">Submit</Button>
                </div>
              </div>
            </div>
            <Aside />
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogItem;
