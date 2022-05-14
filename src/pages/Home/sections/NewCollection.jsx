import React from 'react';

import Collection from '../../../components/Collection/Collection';

function NewCollection() {
  return (
    <section className="new-collection">
      <div className="container-fluid">
        <h3 className="new-collection__title">Новинки в нашей коллекции</h3>
        <p className="new-collection__text">
          Дизайн кухни должен передавать ваш характер, ведь именно в этой комнате собирается вся
          семья и гости.
        </p>
      </div>
      <Collection />
    </section>
  );
}

export default NewCollection;
