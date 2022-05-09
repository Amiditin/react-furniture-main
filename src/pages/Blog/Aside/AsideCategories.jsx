import { listСategories } from '../../../utils/constants';

function AsideCategories({ register }) {
  const { style, coating, decor } = listСategories;

  return (
    <div className="aside__categories">
      <div className="aside__style">
        <h3 className="aside__style-title">{style.name}</h3>
        <select className="aside__style-select" {...register('style')}>
          <option className="aside__style-option" value="">
            Любой
          </option>
          {style.list.map((item) => (
            <option className="aside__style-option" value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <img className="aside__style-arrow" src="/img/tools-icons/arrow-big-left.svg" alt="arrow" />
      </div>
      <div className="aside__coating">
        <h3 className="aside__coating-title">{coating.name}</h3>
        <div className="aside__coating-items"></div>
        {coating.list.map((item) => (
          <div className="aside__coating-item" key={item.id}>
            <input type="checkbox" id={item.id} {...register('coating')} value={item.name} />
            <label htmlFor={item.id}>{item.name}</label>
          </div>
        ))}
      </div>
      <div className="aside__decor">
        <h3 className="aside__decor-title">{decor.name}</h3>
        <div className="aside__decor-items">
          {decor.list.map((item) => (
            <div className="aside__decor-item" key={item.id}>
              <input
                className="aside__decor-item-input"
                type="checkbox"
                id={item.id}
                {...register('decor')}
                value={item.name}
              />
              <label className="aside__decor-item-lable" htmlFor={item.id}>
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AsideCategories;
