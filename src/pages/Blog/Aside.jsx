import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { filterPosts } from '../../redux/postsSlice';
import { listСategories, social } from '../../utils/constants';

import Button from '../../components/Button';
import FormError from '../../components/FormError';

function Aside() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.posts);
  const { style, coating, decor } = listСategories;
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    if (searchParams && !location.state) {
      const params = {
        search: searchParams.get('search'),
        style: searchParams.get('style'),
        coating: searchParams.getAll('coating'),
        decor: searchParams.getAll('decor'),
      };
      reset(params);
      !loading && dispatch(filterPosts(params));
    } else
      setSearchParams({
        ...location.state,
        search: location.state.search ? location.state.search : [],
        style: location.state.style ? location.state.style : [],
      });
  }, [dispatch, loading, location, reset, searchParams, setSearchParams]);

  const onSubmit = (data) => {
    navigate('/blog', { state: data });
  };

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
            src="/img/tools-icons/search.svg"
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
          <img
            className="aside__style-arrow"
            src="/img/tools-icons/arrow-big-left.svg"
            alt="arrow"
          />
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
        <div className="aside__buttons">
          <Button ClassName="black" Type="submit">
            Применить
          </Button>
          <Button
            ClassName="tab"
            onClick={() =>
              reset({
                search: '',
                style: '',
                coating: [],
                decor: [],
              })
            }>
            Сбросить
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
