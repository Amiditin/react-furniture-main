import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { filterPosts } from '../../../redux/postsSlice';

import Button from '../../../components/Button';
import AsideSearch from './AsideSearch';
import AsideCategories from './AsideCategories';
import AsideSocial from './AsideSocial';

function Aside() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.posts);
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
        search: location.state.search || [],
        style: location.state.style || [],
      });
  }, [dispatch, loading, location, reset, searchParams, setSearchParams]);

  const onSubmit = (data) => {
    navigate('/blog', { state: data });
  };

  const onReset = () => {
    reset({
      search: '',
      style: '',
      coating: [],
      decor: [],
    });
  };

  return (
    <aside className="aside">
      <form action="" className="aside__form" onSubmit={handleSubmit(onSubmit)}>
        <AsideSearch register={register} erorrs={errors} handleSubmit={handleSubmit(onSubmit)} />
        <AsideCategories register={register} />
        <div className="aside__buttons">
          <Button ClassName="black" Type="submit">
            Применить
          </Button>
          <Button ClassName="tab" onClick={onReset}>
            Сбросить
          </Button>
        </div>
      </form>
      <AsideSocial />
    </aside>
  );
}

export default Aside;
