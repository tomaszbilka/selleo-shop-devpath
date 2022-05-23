import Button from 'components/UI/Button';

const ContactForm = () => {
  const sendFormHandler = (e) => {
    e.preventDefault();
    console.log('send a form');
  };

  return (
    <section className="contact-container">
      <div className="info">
        <h2 className="info__title">Contact Info</h2>
        <div className="info__wrap">
          <h5 className="info__subtitle">Phone:</h5>
          <div>
            <p>+012 345 678 102</p>
            <p>+012 345 678 304</p>
          </div>
        </div>
        <div className="info__wrap">
          <h5 className="info__subtitle">Email:</h5>
          <div>
            <p>email@here.com</p>
            <p>your@email.here</p>
          </div>
        </div>
        <div className="info__wrap">
          <h5 className="info__subtitle">Address:</h5>
          <div>
            <p>Big City</p>
            <p>street, Crossroad 123</p>
          </div>
        </div>
      </div>
      <form onSubmit={sendFormHandler} className="form">
        <h2 className="form__title">Get In Touch</h2>
        <div className="form__names-controls">
          <div className="form__controls">
            <label htmlFor="name" className="form__label">
              First Name
            </label>
            <input name="name" type="text" className="form__input"></input>
          </div>
          <div className="form__controls">
            <label htmlFor="lastName" className="form__label">
              Last Name
            </label>
            <input name="lastName" type="text" className="form__input"></input>
          </div>
        </div>
        <div className="form__controls">
          <label htmlFor="subject" className="form__label">
            Subject
          </label>
          <input name="subject" type="text" className="form__input"></input>
        </div>
        <div className="form__controls">
          <label htmlFor="message" className="form__label">
            Message
          </label>
          <textarea
            name="message"
            type="text"
            className="form__input"
            rows="6"
          ></textarea>
        </div>
        <Button title="send message" type="submit" />
      </form>
    </section>
  );
};

export default ContactForm;
