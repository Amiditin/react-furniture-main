import { choiceCompany } from '../../../utils/constants';

function ChoiceCompany() {
  return (
    <section className="choice-company">
      <div className="container">
        <h3 className="choice-company__title">Как выбрать компанию</h3>
        <div className="choice-company__items">
          <div className="choice-company__items-box">
            <div
              className={`choice-company__item choice-company__item--${choiceCompany[0].name}`}
              key={choiceCompany[0].name}>
              <img className="choice-company__item-img" src={choiceCompany[0].imgUrl} alt="icon" />
              <h6 className="choice-company__item-title">{choiceCompany[0].title}</h6>
              <p className="choice-company__item-text">{choiceCompany[0].text}</p>
            </div>
            <div
              className={`choice-company__item choice-company__item--${choiceCompany[1].name}`}
              key={choiceCompany[1].name}>
              <img className="choice-company__item-img" src={choiceCompany[1].imgUrl} alt="icon" />
              <h6 className="choice-company__item-title">{choiceCompany[1].title}</h6>
              <p className="choice-company__item-text">{choiceCompany[1].text}</p>
            </div>
          </div>
          <div
            className={`choice-company__item choice-company__item--${choiceCompany[2].name}`}
            key={choiceCompany[2].name}>
            <img className="choice-company__item-img" src={choiceCompany[2].imgUrl} alt="icon" />
            <h6 className="choice-company__item-title">{choiceCompany[2].title}</h6>
            <p className="choice-company__item-text">{choiceCompany[2].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChoiceCompany;
