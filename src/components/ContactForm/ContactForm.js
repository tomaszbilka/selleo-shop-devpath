import { useRef, useEffect } from 'react';
import Button from 'components/UI/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const nameInputRef = useRef();

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters long')
      .required('Required'),
    lastName: Yup.string()
      .min(3, 'Must be at least 3 characters long')
      .required('Required'),
    subject: Yup.string()
      .min(5, 'Must be at least 5 characters long')
      .required('Required'),
    message: Yup.string()
      .min(20, 'Must be at least 20 characters long')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      toast.success('Your message was sent!', {
        autoClose: 1500,
      });
      //send form somewhere
    },
  });

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
      <form onSubmit={formik.handleSubmit} className="form">
        <h2 className="form__title">Get In Touch</h2>
        <div className="form__names-controls">
          <div className="form__controls">
            <label htmlFor="name" className="form__label">
              First Name
            </label>
            <input
              ref={nameInputRef}
              id="name"
              name="name"
              type="text"
              className="form__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            ></input>
            {formik.touched.name && formik.errors.name ? (
              <div className="form__error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form__controls">
            <label htmlFor="lastName" className="form__label">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            ></input>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="form__error">{formik.errors.lastName}</div>
            ) : null}
          </div>
        </div>
        <div className="form__controls">
          <label htmlFor="subject" className="form__label">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="form__input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          ></input>
          {formik.touched.subject && formik.errors.subject ? (
            <div className="form__error">{formik.errors.subject}</div>
          ) : null}
        </div>
        <div className="form__controls">
          <label htmlFor="message" className="form__label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            type="text"
            className="form__input"
            rows="6"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="form__error">{formik.errors.message}</div>
          ) : null}
        </div>
        <Button title="send message" type="submit" />
      </form>
    </section>
  );
};

export default ContactForm;
