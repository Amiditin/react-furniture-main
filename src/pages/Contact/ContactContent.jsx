import { contacts } from '../../utils/constants';

function ContactContent() {
  return (
    <>
      <p className="contact__text">
        Нашли опечатку? <br />
        Остались вопросы? <br />
        Напишите нам, ответим в ближайшее время! <br />
        Общий отдел:
      </p>
      <a className="contact__phone" href={`tel:+7${contacts.phone}`}>
        {contacts.customPhone}
      </a>
      <div className="contact__street">{contacts.street}</div>
      <div className="contact__city">{contacts.city}</div>
      <a className="contact__info-email" href="mailto:ouremailaddress@email.com">
        <img src="/img/tools-icons/envelope.svg" alt="envelope" />
        {contacts.email}
      </a>
    </>
  );
}

export default ContactContent;
