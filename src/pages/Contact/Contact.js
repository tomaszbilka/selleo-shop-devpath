import ContactForm from 'components/ContactForm';
import PageTitle from 'components/PageTitle';
import { useTitle } from 'react-use';

const Contact = () => {
  useTitle('Contact demo');

  return (
    <>
      <PageTitle title="Contact" />
      <ContactForm />
    </>
  );
};

export default Contact;
