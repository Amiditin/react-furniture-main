import { listСategories } from '../../../utils/constants/listСategories';

function CreatePostFormAside({ register }) {
  const { style, coating, decor } = listСategories;

  return (
    <div className="aside">
      <div className="aside__style">
        <h3 className="aside__style-title">{style.name}</h3>
        <div className="aside__style-items">
          {style.list.map((item) => (
            <div className="aside__style-item" key={item.id}>
              <input type="radio" id={item.id} {...register('style')} value={item.name} />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          ))}
        </div>
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

export default CreatePostFormAside;
