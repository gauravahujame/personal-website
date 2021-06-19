import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ContactInfo from 'components/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact | Gaurav Ahuja" />
      <ContactInfo />
    </Layout>
  );
};

export default ContactPage;
