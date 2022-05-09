import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../../utils/firebase-config';
import { getCurrentDate } from '../../utils/scripts';

import Button from '../Button';
import FormError from '../FormError';

function FooterForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    await addDoc(collection(database, 'subscribe-emeil'), {
      ...data,
      date: getCurrentDate(),
    }).then(alert('Вы подписались на рассылку!'));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: '' });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className="footer__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="footer__input">
        <input
          className="input"
          {...register('email', {
            required: 'Почта обязательна к заполнению',
            minLength: { value: 5, message: 'Минимум 7 символов' },
          })}
          placeholder="Подписаться на рассылку"
          type="email"
        />
        {errors?.email && <FormError errors={errors?.email} />}
      </div>
      <div className="footer__button">
        <Button ClassName="black" Type="submit">
          Подтвердить
        </Button>
      </div>
    </form>
  );
}

export default FooterForm;
