import FormError from '../../../components/FormError';

function AsideSearch({ register, errors, handleSubmit }) {
  return (
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
        onClick={handleSubmit}
      />
      {errors?.search && <FormError errors={errors?.search} />}
    </div>
  );
}

export default AsideSearch;
