import React from 'react';

import Aside from './Aside';

function Blog() {
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
                  edison bulb farm-to-table
                </p>
              </div>
              <div className="blog__item">
                <img className="blog__item-img" src="/img/blog/5.jpg" alt="img" />
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
                  edison bulb farm-to-table
                </p>
              </div>
              <div className="blog__item">
                <img className="blog__item-img" src="/img/blog/4.jpg" alt="img" />
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
                  edison bulb farm-to-table
                </p>
              </div>
              <div className="pagination">
                <img
                  className="pagination__arrow pagination__arrow--disabled"
                  src="img/arrow-left.svg"
                  alt="arrow"
                />
                <ul className="pagination__list">
                  <li className="pagination__list-item pagination__list-item--active">1</li>
                  <li className="pagination__list-item">2</li>
                  <li className="pagination__list-item">3</li>
                </ul>
                <img className="pagination__arrow" src="img/arrow-right.svg" alt="arrow" />
              </div>
            </div>
            <Aside />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
