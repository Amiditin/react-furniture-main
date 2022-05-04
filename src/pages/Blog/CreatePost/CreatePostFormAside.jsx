import { listСategories } from '../../../utils/constants/listСategories';

function CreatePostFormAside({ register }) {
  const { style, coating, decor } = listСategories;

  return (
    <div className="aside">
      <div className="create-post__style">
        <h3 className="create-post__style-title">{style.name}</h3>
        <div className="create-post__style-items">
          {style.list.map((item) => (
            <div className="create-post__style-item" key={item.id}>
              <input type="radio" id={item.id} {...register('style')} value={item.name} />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="create-post__coating">
        <h3 className="create-post__coating-title">{coating.name}</h3>
        <div className="create-post__coating-items"></div>
        {coating.list.map((item) => (
          <div className="create-post__coating-item" key={item.id}>
            <input type="checkbox" id={item.id} {...register('coating')} value={item.name} />
            <label htmlFor={item.id}>{item.name}</label>
          </div>
        ))}
      </div>
      <div className="create-post__decor">
        <h3 className="create-post__decor-title">{decor.name}</h3>
        <div className="create-post__decor-items">
          {decor.list.map((item) => (
            <div className="create-post__decor-item" key={item.id}>
              <input
                className="create-post__decor-item-input"
                type="checkbox"
                id={item.id}
                {...register('decor')}
                value={item.name}
              />
              <label className="create-post__decor-item-lable" htmlFor={item.id}>
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
