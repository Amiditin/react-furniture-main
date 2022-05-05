import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { filterPosts } from '../../redux/postsSlice';
import { listСategories, social } from '../../utils/constants';

import Button from '../../components/Button';
import FormError from '../../components/FormError';

function Aside() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.posts);
  const [searchParams, setSearchParams] = useSearchParams();
  const { style, coating, decor } = listСategories;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      search: searchParams.get('search'),
      style: searchParams.get('style'),
      coating: searchParams.getAll('coating'),
      decor: searchParams.getAll('decor'),
    },
  });

  const onSubmit = (data) => {
    setSearchParams({
      ...data,
      search: data.search ? data.search : [],
      style: data.style ? data.style : [],
    });
  };

  useEffect(() => {
    !loading &&
      dispatch(
        filterPosts({
          search: searchParams.get('search'),
          style: searchParams.get('style'),
          coating: searchParams.getAll('coating'),
          decor: searchParams.getAll('decor'),
        }),
      );
  }, [dispatch, loading, searchParams]);

  return (
    <aside className="aside">
      <form action="" className="aside__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="aside__search">
          <input
            className="input"
            {...register('search', {
              minLength: { value: 5, message: 'Минимум 5 символов' },
            })}
            placeholder="Поиск"
            type="text"
          />
          <img
            className="aside__search-btn"
            src="/img/search.svg"
            alt="search"
            onClick={handleSubmit(onSubmit)}
          />
          {errors?.search && <FormError errors={errors?.search} />}
        </div>
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
        <div className="aside__button-submit">
          <Button ClassName="black" Type="submit">
            Применить
          </Button>
        </div>
      </form>
      <ul className="aside__social">
        {social.map((network) => (
          <li className="aside__social-item" key={network.id}>
            <a
              className="aside__social-link"
              href={network.linkUrl}
              target="_blank"
              rel="noreferrer">
              <img className="aside__social-icon" src={network.iconUrl} alt={network.name} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
