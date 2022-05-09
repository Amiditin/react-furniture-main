import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../utils/firebase-config';
import { getCurrentDate } from '../../utils/scripts';

import Button from '../../components/Button';
import FormError from '../../components/FormError';

function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    await addDoc(collection(database, 'contact-messages'), {
      ...data,
      date: getCurrentDate(),
    }).then(alert('Ваше сообщение отправлено'));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: '', email: '', text: '' });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact__inputs">
        <div className="contact__input">
          <input
            className="input"
            {...register('name', {
              required: 'Имя обязательно к заполнению',
              minLength: { value: 5, message: 'Минимум 5 символов' },
            })}
            placeholder="ФИО"
            type="text"
          />
          {errors?.name && <FormError errors={errors?.name} />}
        </div>
        <div className="contact__input">
          <input
            className="input"
            {...register('email', {
              required: 'Почта обязательна к заполнению',
              minLength: { value: 5, message: 'Минимум 7 символов' },
            })}
            placeholder="Почта"
            type="email"
          />
          {errors?.email && <FormError errors={errors?.email} />}
        </div>
      </div>
      <div className="contact__textarea">
        <textarea
          {...register('text', {
            required: 'Сообщение обязателено к заполнению',
            minLength: { value: 40, message: 'Минимум 30 символов' },
          })}
          className="textarea"
          placeholder="Сообщение"
        />
        {errors?.text && <FormError errors={errors?.text} />}
      </div>
      <Button ClassName="black" Type="submit">
        Отправить
      </Button>
    </form>
  );
}

export default ContactForm;
