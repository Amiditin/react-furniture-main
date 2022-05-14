import { performance } from '../../../utils/constants';

function Performance() {
  return (
    <section className="performance">
      <img
        className="performance__background"
        src="/img/content/performance-bg.jpg"
        alt="background"
      />
      <div className="container-fluid">
        <div className="performance__inner">
          <img
            className="performance__img"
            src="/img/content/performance-decor.jpg"
            alt="img-decor"
          />
          <div className="performance__content">
            <h3 className="performance__title">Качество работы</h3>
            <p className="performance__text">
              Когда установщики просят проверить качество работы, нужно обратить внимание даже на
              мелкие детали. Итак, вам нужно осмотреть:
            </p>
            <ul className="performance__list">
              {performance.map((item) => (
                <li className="performance__item" key={item.id}>
                  <div className="performance__item-content">
                    <p className="performance__item-text">{item.text}</p>
                    <p className="performance__percent">{item.percent}</p>
                  </div>
                  <div className="performance__line" style={{ width: item.percent }}></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Performance;
