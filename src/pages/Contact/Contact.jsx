import Technologies from '../../components/Technologies';
import ContactMap from './ContactMap';
import ContactSocial from './ContactSocial';
import ContactContent from './ContactContent';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <main className="main">
      <ContactMap />
      <section className="contact">
        <div className="container">
          <h3 className="contact__title">Контакты</h3>
          <div className="contact__content">
            <ContactSocial />
            <ContactContent />
            <ContactForm />
          </div>
        </div>
      </section>
      <Technologies />
    </main>
  );
}

export default Contact;
