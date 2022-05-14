import React from 'react';

function Decor() {
  return (
    <section className="decor">
      <img className="decor__background" src="/img/content/decor-bg.jpg" alt="background" />
      <div className="container">
        <h2 className="decor__title">Выделяем бюджет</h2>
        <p className="decor__text">
          Сколько стоит хорошая кухня? Всё зависит от многих параметров. Первый — размеры. Логично,
          что чем больше площадь, тем дороже. Второй — материалы. Когда речь идет о качественных
          материалах, каменной столешнице, европейской фурнитуре, а не их дешевых аналогах, цена
          тоже возрастает.
        </p>
      </div>
    </section>
  );
}

export default Decor;
